import {
  IOrderModuleService,
  UpdateOrderChangeDTO,
} from "@srinivasulu-narayanam/framework/types"
import {
  Modules,
  getSelectsAndRelationsFromObjectArray,
} from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const updateOrderChangesStepId = "update-order-shopping-methods"
/**
 * This step updates order change.
 */
export const updateOrderChangesStep = createStep(
  updateOrderChangesStepId,
  async (data: UpdateOrderChangeDTO[], { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    const { selects, relations } = getSelectsAndRelationsFromObjectArray(data, {
      objectFields: ["metadata"],
    })

    const dataBeforeUpdate = await service.listOrderChanges(
      { id: data.map((d) => d.id) },
      { relations, select: selects }
    )

    const updated = await service.updateOrderChanges(data)

    return new StepResponse(updated, dataBeforeUpdate)
  },
  async (dataBeforeUpdate, { container }) => {
    if (!dataBeforeUpdate?.length) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.updateOrderChanges(dataBeforeUpdate as UpdateOrderChangeDTO[])
  }
)
