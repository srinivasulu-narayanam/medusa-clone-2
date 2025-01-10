import {
  deleteReturnReasonsWorkflow,
  updateRefundReasonsWorkflow,
} from "@srinivasulu-narayanam/core-flows"
import { HttpTypes, RefundReasonResponse } from "@srinivasulu-narayanam/framework/types"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  refetchEntity,
} from "@srinivasulu-narayanam/framework/http"
import { AdminUpdatePaymentRefundReasonType } from "../validators"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<RefundReasonResponse>
) => {
  const refund_reason = await refetchEntity(
    "refund_reason",
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.json({ refund_reason })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminUpdatePaymentRefundReasonType>,
  res: MedusaResponse<RefundReasonResponse>
) => {
  const { id } = req.params

  await updateRefundReasonsWorkflow(req.scope).run({
    input: [
      {
        ...req.validatedBody,
        id,
      },
    ],
  })

  const refund_reason = await refetchEntity(
    "refund_reason",
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.json({ refund_reason })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminRefundReasonDeleteResponse>
) => {
  const { id } = req.params
  const input = { ids: [id] }

  await deleteReturnReasonsWorkflow(req.scope).run({ input })

  res.json({
    id,
    object: "refund_reason",
    deleted: true,
  })
}
