import {
  CreateRefundReasonDTO,
  IPaymentModuleService,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const createRefundReasonStepId = "create-refund-reason"
/**
 * This step creates one or more refund reasons.
 */
export const createRefundReasonStep = createStep(
  createRefundReasonStepId,
  async (data: CreateRefundReasonDTO[], { container }) => {
    const service = container.resolve<IPaymentModuleService>(Modules.PAYMENT)

    const refundReasons = await service.createRefundReasons(data)

    return new StepResponse(
      refundReasons,
      refundReasons.map((rr) => rr.id)
    )
  },
  async (ids, { container }) => {
    if (!ids?.length) {
      return
    }

    const service = container.resolve<IPaymentModuleService>(Modules.PAYMENT)

    await service.deleteRefundReasons(ids)
  }
)
