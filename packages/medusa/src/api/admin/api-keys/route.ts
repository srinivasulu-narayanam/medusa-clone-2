import { createApiKeysWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"
import { AdminCreateApiKeyType } from "./validators"
import { HttpTypes } from "@srinivasulu-narayanam/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetApiKeysParams>,
  res: MedusaResponse<HttpTypes.AdminApiKeyListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "api_key",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: apiKeys, metadata } = await remoteQuery(queryObject)

  res.json({
    api_keys: apiKeys,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminCreateApiKeyType>,
  res: MedusaResponse<HttpTypes.AdminApiKeyResponse>
) => {
  const input = [
    {
      ...req.validatedBody,
      created_by: req.auth_context.actor_id,
    },
  ]

  const { result } = await createApiKeysWorkflow(req.scope).run({
    input: { api_keys: input },
  })

  // We should not refetch the api key here, as we need to show the secret key in the response (and never again)
  // And the only time we get to see the secret, is when we create it
  res.status(200).json({ api_key: result[0] })
}
