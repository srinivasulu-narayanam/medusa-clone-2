import {
  IOrderModuleService,
  RegisterOrderFulfillmentDTO,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const registerOrderFulfillmentStepId = "register-order-fullfillment"
/**
 * This step registers a fulfillment for an order.
 */
export const registerOrderFulfillmentStep = createStep(
  registerOrderFulfillmentStepId,
  async (data: RegisterOrderFulfillmentDTO, { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.registerFulfillment(data)
    return new StepResponse(void 0, data.order_id)
  },
  async (orderId, { container }) => {
    if (!orderId) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.revertLastVersion(orderId)
  }
)
