import { IPricingModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deletePricePreferencesStepId = "delete-price-preferences"
/**
 * This step deletes one or more price preferences.
 */
export const deletePricePreferencesStep = createStep(
  deletePricePreferencesStepId,
  async (ids: string[], { container }) => {
    const service = container.resolve<IPricingModuleService>(Modules.PRICING)

    await service.softDeletePricePreferences(ids)

    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IPricingModuleService>(Modules.PRICING)

    await service.restorePricePreferences(prevIds)
  }
)
