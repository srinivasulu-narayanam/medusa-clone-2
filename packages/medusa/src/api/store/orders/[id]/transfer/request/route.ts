import {
  getOrderDetailWorkflow,
  requestOrderTransferWorkflow,
} from "@srinivasulu-narayanam/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"
import { HttpTypes } from "@srinivasulu-narayanam/framework/types"
import { StoreRequestOrderTransferType } from "../../../validators"

export const POST = async (
  req: AuthenticatedMedusaRequest<StoreRequestOrderTransferType>,
  res: MedusaResponse<HttpTypes.StoreOrderResponse>
) => {
  const orderId = req.params.id
  const customerId = req.auth_context.actor_id

  await requestOrderTransferWorkflow(req.scope).run({
    input: {
      order_id: orderId,
      customer_id: customerId,
      logged_in_user: customerId,
      description: req.validatedBody.description,
    },
  })

  const { result } = await getOrderDetailWorkflow(req.scope).run({
    input: {
      fields: req.queryConfig.fields,
      order_id: orderId,
    },
  })

  res.status(200).json({ order: result as HttpTypes.StoreOrder })
}
