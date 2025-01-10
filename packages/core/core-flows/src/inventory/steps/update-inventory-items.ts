import { IInventoryService, InventoryTypes } from "@srinivasulu-narayanam/framework/types"
import {
  convertItemResponseToUpdateRequest,
  getSelectsAndRelationsFromObjectArray,
} from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

import { Modules } from "@srinivasulu-narayanam/framework/utils"

export const updateInventoryItemsStepId = "update-inventory-items-step"
/**
 * This step updates one or more inventory items.
 */
export const updateInventoryItemsStep = createStep(
  updateInventoryItemsStepId,
  async (input: InventoryTypes.UpdateInventoryItemInput[], { container }) => {
    const inventoryService = container.resolve<IInventoryService>(
      Modules.INVENTORY
    )
    const { selects, relations } = getSelectsAndRelationsFromObjectArray(input)

    const dataBeforeUpdate = await inventoryService.listInventoryItems(
      { id: input.map(({ id }) => id) },
      {}
    )

    const updatedInventoryItems = await inventoryService.updateInventoryItems(
      input
    )

    return new StepResponse(updatedInventoryItems, {
      dataBeforeUpdate,
      selects,
      relations,
    })
  },
  async (revertInput, { container }) => {
    if (!revertInput?.dataBeforeUpdate?.length) {
      return
    }

    const { dataBeforeUpdate, selects, relations } = revertInput

    const inventoryService = container.resolve<IInventoryService>(
      Modules.INVENTORY
    )

    await inventoryService.updateInventoryItems(
      dataBeforeUpdate.map((data) =>
        convertItemResponseToUpdateRequest(data, selects, relations)
      )
    )
  }
)
