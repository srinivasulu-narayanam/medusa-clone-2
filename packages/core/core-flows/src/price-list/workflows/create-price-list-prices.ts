import {
  CreatePriceListPricesWorkflowDTO,
  PricingTypes,
} from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
  parallelize,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { createPriceListPricesStep } from "../steps/create-price-list-prices"
import { validatePriceListsStep } from "../steps/validate-price-lists"
import { validateVariantPriceLinksStep } from "../steps/validate-variant-price-links"

export const createPriceListPricesWorkflowId = "create-price-list-prices"
/**
 * This workflow creates prices in price lists.
 */
export const createPriceListPricesWorkflow = createWorkflow(
  createPriceListPricesWorkflowId,
  (
    input: WorkflowData<{
      data: CreatePriceListPricesWorkflowDTO[]
    }>
  ): WorkflowResponse<PricingTypes.PriceDTO[]> => {
    const [_, variantPriceMap] = parallelize(
      validatePriceListsStep(input.data),
      validateVariantPriceLinksStep(input.data)
    )

    return new WorkflowResponse(
      createPriceListPricesStep({
        data: input.data,
        variant_price_map: variantPriceMap,
      })
    )
  }
)
