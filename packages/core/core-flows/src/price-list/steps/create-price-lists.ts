import {
  CreatePriceListDTO,
  CreatePriceListsWorkflowStepDTO,
  IPricingModuleService,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const createPriceListsStepId = "create-price-lists"
/**
 * This step creates a price list.
 */
export const createPriceListsStep = createStep(
  createPriceListsStepId,
  async (stepInput: CreatePriceListsWorkflowStepDTO, { container }) => {
    const { data, variant_price_map: variantPriceMap } = stepInput

    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    const createData = data.map((priceListDTO) => {
      const { prices = [], ...rest } = priceListDTO
      const createPriceListData: CreatePriceListDTO = { ...rest }

      createPriceListData.prices = prices.map((price) => ({
        currency_code: price.currency_code,
        amount: price.amount,
        min_quantity: price.min_quantity,
        max_quantity: price.max_quantity,
        price_set_id: variantPriceMap[price.variant_id],
        rules: price.rules,
      }))

      return createPriceListData
    })

    const createdPriceLists = await pricingModule.createPriceLists(createData)

    return new StepResponse(
      createdPriceLists,
      createdPriceLists.map((createdPriceLists) => createdPriceLists.id)
    )
  },
  async (createdPriceListIds, { container }) => {
    if (!createdPriceListIds?.length) {
      return
    }

    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    await pricingModule.deletePriceLists(createdPriceListIds)
  }
)
