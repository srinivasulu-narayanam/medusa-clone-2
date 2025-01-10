import {
  FindConfig,
  IFulfillmentModuleService,
  ShippingOptionDTO,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export interface ListShippingOptionsForContextStepInput {
  context: Record<string, unknown>
  config?: FindConfig<ShippingOptionDTO>
}

export const listShippingOptionsForContextStepId =
  "list-shipping-options-for-context"
/**
 * This step retrieves shipping options that can be used in the specified context.
 */
export const listShippingOptionsForContextStep = createStep(
  listShippingOptionsForContextStepId,
  async (data: ListShippingOptionsForContextStepInput, { container }) => {
    const fulfillmentService = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    const shippingOptions =
      await fulfillmentService.listShippingOptionsForContext(
        data.context,
        data.config
      )

    return new StepResponse(shippingOptions)
  }
)
