import {
  IPricingModuleService,
  PricingWorkflow,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const createPricePreferencesStepId = "create-price-preferences"
/**
 * This step creates one or more price preferences.
 */
export const createPricePreferencesStep = createStep(
  createPricePreferencesStepId,
  async (
    data: PricingWorkflow.CreatePricePreferencesWorkflowInput[],
    { container }
  ) => {
    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    const pricePreferences = await pricingModule.createPricePreferences(data)

    return new StepResponse(
      pricePreferences,
      pricePreferences.map((pricePreference) => pricePreference.id)
    )
  },
  async (pricePreferences, { container }) => {
    if (!pricePreferences?.length) {
      return
    }

    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    await pricingModule.deletePricePreferences(pricePreferences)
  }
)
