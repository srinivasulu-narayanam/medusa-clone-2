import { HttpTypes } from "@srinivasulu-narayanam/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetFulfillmentProvidersParams>,
  res: MedusaResponse<HttpTypes.AdminFulfillmentProviderListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "fulfillment_provider",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: fulfillment_providers, metadata } = await remoteQuery(
    queryObject
  )

  res.json({
    fulfillment_providers,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
