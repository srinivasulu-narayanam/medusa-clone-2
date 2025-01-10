import { requestOrderTransferWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"
import { HttpTypes } from "@srinivasulu-narayanam/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"
import { AdminTransferOrderType } from "../../validators"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminTransferOrderType>,
  res: MedusaResponse<HttpTypes.AdminOrderResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const variables = { id: req.params.id }

  await requestOrderTransferWorkflow(req.scope).run({
    input: {
      order_id: req.params.id,
      customer_id: req.validatedBody.customer_id,
      logged_in_user: req.auth_context.actor_id,
      description: req.validatedBody.description,
      internal_note: req.validatedBody.internal_note,
    },
  })

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order",
    variables,
    fields: req.queryConfig.fields,
  })

  const [order] = await remoteQuery(queryObject)
  res.status(200).json({ order })
}
