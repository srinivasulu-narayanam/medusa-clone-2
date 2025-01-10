import {
  AddPriceListPricesDTO,
  CreatePriceListPriceDTO,
  CreatePriceListPriceWorkflowDTO,
  CreatePriceListPricesWorkflowStepDTO,
  IPricingModuleService,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const createPriceListPricesStepId = "create-price-list-prices"
/**
 * This step creates prices for a price list.
 */
export const createPriceListPricesStep = createStep(
  createPriceListPricesStepId,
  async (stepInput: CreatePriceListPricesWorkflowStepDTO, { container }) => {
    const { data, variant_price_map: variantPriceSetMap } = stepInput
    const priceListPricesToCreate: AddPriceListPricesDTO[] = []
    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    for (const createPriceListPricesData of data) {
      const { prices = [], id } = createPriceListPricesData
      const pricesToAdd: CreatePriceListPriceDTO[] = []

      for (const price of prices) {
        const toPush = {
          ...price,
          price_set_id: variantPriceSetMap[price.variant_id!],
        } as CreatePriceListPriceDTO
        delete (toPush as Partial<CreatePriceListPriceWorkflowDTO>).variant_id
        pricesToAdd.push(toPush)
      }

      if (pricesToAdd.length) {
        priceListPricesToCreate.push({
          price_list_id: id,
          prices: pricesToAdd,
        })
      }
    }

    const createdPrices = await pricingModule.addPriceListPrices(
      priceListPricesToCreate
    )

    return new StepResponse(
      createdPrices,
      createdPrices.map((p) => p.id)
    )
  },
  async (createdIds, { container }) => {
    if (!createdIds?.length) {
      return
    }

    const pricingModule = container.resolve<IPricingModuleService>(
      Modules.PRICING
    )

    if (createdIds.length) {
      await pricingModule.removePrices(createdIds)
    }
  }
)
