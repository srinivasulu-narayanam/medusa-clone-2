import { ITaxModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deleteTaxRegionsStepId = "delete-tax-regions"
/**
 * This step deletes one or more tax regions.
 */
export const deleteTaxRegionsStep = createStep(
  deleteTaxRegionsStepId,
  async (ids: string[], { container }) => {
    const service = container.resolve<ITaxModuleService>(Modules.TAX)

    await service.softDeleteTaxRegions(ids)

    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<ITaxModuleService>(Modules.TAX)

    await service.restoreTaxRegions(prevIds)
  }
)
