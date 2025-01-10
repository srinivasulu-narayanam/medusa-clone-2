import { IPaymentModuleService, Logger } from "@srinivasulu-narayanam/framework/types"
import {
  ContainerRegistrationKeys,
  Modules,
  promiseAll,
} from "@srinivasulu-narayanam/framework/utils"
import { createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export type CancelPaymentStepInput = {
  paymentIds: string | string[]
}

export const cancelPaymentStepId = "cancel-payment-step"
/**
 * This step cancels one or more payments.
 */
export const cancelPaymentStep = createStep(
  cancelPaymentStepId,
  async (input: CancelPaymentStepInput, { container }) => {
    const logger = container.resolve<Logger>(ContainerRegistrationKeys.LOGGER)
    const paymentModule = container.resolve<IPaymentModuleService>(
      Modules.PAYMENT
    )

    const paymentIds = Array.isArray(input.paymentIds)
      ? input.paymentIds
      : [input.paymentIds]

    const promises: Promise<any>[] = []

    for (const id of paymentIds) {
      promises.push(
        paymentModule.cancelPayment(id).catch((e) => {
          logger.error(
            `Error was thrown trying to cancel payment - ${id} - ${e}`
          )
        })
      )
    }

    await promiseAll(promises)
  }
)
