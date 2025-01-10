import {
  CalculateShippingOptionPriceDTO,
  IFulfillmentModuleService,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const calculateShippingOptionsPricesStepId =
  "calculate-shipping-options-prices"
/**
 * This step calculates the prices for one or more shipping options.
 */
export const calculateShippingOptionsPricesStep = createStep(
  calculateShippingOptionsPricesStepId,
  async (input: CalculateShippingOptionPriceDTO[], { container }) => {
    const service = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    const prices = await service.calculateShippingOptionsPrices(input)

    return new StepResponse(prices)
  }
)
