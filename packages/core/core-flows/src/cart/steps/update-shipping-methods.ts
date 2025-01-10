import {
  ICartModuleService,
  UpdateShippingMethodDTO,
} from "@srinivasulu-narayanam/framework/types"
import {
  Modules,
  getSelectsAndRelationsFromObjectArray,
} from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const updateShippingMethodsStepId = "update-shipping-methods-step"
/**
 * This step updates a cart's shipping methods.
 */
export const updateShippingMethodsStep = createStep(
  updateShippingMethodsStepId,
  async (data: UpdateShippingMethodDTO[], { container }) => {
    if (!data?.length) {
      return new StepResponse([], [])
    }

    const cartModule = container.resolve<ICartModuleService>(Modules.CART)
    const { selects, relations } = getSelectsAndRelationsFromObjectArray(data)

    const dataBeforeUpdate = await cartModule.listShippingMethods(
      { id: data.map((d) => d.id!) },
      { select: selects, relations }
    )

    const updatedItems = await cartModule.updateShippingMethods(data)

    return new StepResponse(updatedItems, dataBeforeUpdate)
  },
  async (dataBeforeUpdate, { container }) => {
    if (!dataBeforeUpdate?.length) {
      return
    }

    const cartModule: ICartModuleService = container.resolve(Modules.CART)

    await cartModule.updateShippingMethods(dataBeforeUpdate)
  }
)
