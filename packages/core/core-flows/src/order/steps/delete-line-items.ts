import { IOrderModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export interface DeleteOrderLineItemsStepInput {
  ids: string[]
}

/**
 * This step deletes order line items.
 */
export const deleteOrderLineItems = createStep(
  "delete-order-line-items",
  async (input: DeleteOrderLineItemsStepInput, { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    const deleted = await service.softDeleteOrderLineItems(input.ids)

    return new StepResponse(deleted, input.ids)
  },
  async (ids, { container }) => {
    if (!ids) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.restoreOrderLineItems(ids)
  }
)
