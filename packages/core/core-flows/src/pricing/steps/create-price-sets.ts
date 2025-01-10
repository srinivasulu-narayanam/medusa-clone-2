import {
  CreatePriceSetDTO,
  IPricingModuleService,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const createPriceSetsStepId = "create-price-sets"
/**
 * This step creates one or more price sets.
 */
export const createPriceSetsStep = createStep(
  createPriceSetsStepId,
  async (data: CreatePriceSetDTO[], { container }) => {
    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    const priceSets = await pricingModule.createPriceSets(data)

    return new StepResponse(
      priceSets,
      priceSets.map((priceSet) => priceSet.id)
    )
  },
  async (priceSets, { container }) => {
    if (!priceSets?.length) {
      return
    }

    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    await pricingModule.deletePriceSets(priceSets)
  }
)
