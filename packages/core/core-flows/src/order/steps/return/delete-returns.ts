import { IOrderModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { createStep, StepResponse } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deleteReturnsStepId = "delete-return"
/**
 * This step deletes one or more returns.
 */
export const deleteReturnsStep = createStep(
  deleteReturnsStepId,
  async (data: { ids: string[] }, { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    const ids = data.ids.filter(Boolean)

    const deleted = ids.length ? await service.softDeleteReturns(ids) : []

    return new StepResponse(deleted, data.ids)
  },
  async (ids, { container }) => {
    if (!ids?.length) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.restoreReturns(ids)
  }
)
