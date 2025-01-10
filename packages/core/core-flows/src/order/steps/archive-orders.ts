import { IOrderModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { createStep, StepResponse } from "@srinivasulu-narayanam/framework/workflows-sdk"

export type ArchiveOrdersStepInput = {
  orderIds: string[]
}

export const archiveOrdersStepId = "archive-orders"
/**
 * This step archives one or more orders.
 */
export const archiveOrdersStep = createStep(
  archiveOrdersStepId,
  async (data: ArchiveOrdersStepInput, { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    const archived = await service.archive(data.orderIds)
    return new StepResponse(
      archived,
      archived.map((store) => {
        return {
          id: store.id,
          status: store.status,
        }
      })
    )
  },
  async (archived, { container }) => {
    if (!archived?.length) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.updateOrders(archived)
  }
)
