import { createExchangeShippingMethodWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"
import { AdminPostExchangesShippingReqSchemaType } from "../../../validators"
import { HttpTypes } from "@srinivasulu-narayanam/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminPostExchangesShippingReqSchemaType>,
  res: MedusaResponse<HttpTypes.AdminExchangePreviewResponse>
) => {
  const { id } = req.params

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const { result } = await createExchangeShippingMethodWorkflow(req.scope).run({
    input: { ...req.validatedBody, exchange_id: id },
  })

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order_exchange",
    variables: {
      id,
      filters: {
        ...req.filterableFields,
      },
    },
    fields: req.queryConfig.fields,
  })

  const [orderExchange] = await remoteQuery(queryObject)

  res.json({
    order_preview: result as unknown as HttpTypes.AdminOrderPreview,
    exchange: orderExchange,
  })
}
