import {
  IFulfillmentModuleService,
  RemoveFulfillmentShippingOptionRulesWorkflowDTO,
  RuleOperatorType,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deleteShippingOptionRulesStepId = "delete-shipping-option-rules"
/**
 * This step deletes one or more shipping option rules.
 */
export const deleteShippingOptionRulesStep = createStep(
  deleteShippingOptionRulesStepId,
  async (
    input: RemoveFulfillmentShippingOptionRulesWorkflowDTO,
    { container }
  ) => {
    if (!input.ids?.length) {
      return
    }

    const { ids } = input

    const fulfillmentModule = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    const shippingOptionRules = await fulfillmentModule.listShippingOptionRules(
      { id: ids },
      { select: ["attribute", "operator", "value", "shipping_option_id"] }
    )

    await fulfillmentModule.deleteShippingOptionRules(ids)

    return new StepResponse(ids, shippingOptionRules)
  },
  async (shippingOptionRules, { container }) => {
    if (!shippingOptionRules?.length) {
      return
    }

    const fulfillmentModule = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    await fulfillmentModule.createShippingOptionRules(
      shippingOptionRules.map((rule) => ({
        id: rule.id,
        attribute: rule.attribute,
        operator: rule.operator as RuleOperatorType,
        value: rule.value as unknown as string | string[],
        shipping_option_id: rule.shipping_option_id,
      }))
    )
  }
)
