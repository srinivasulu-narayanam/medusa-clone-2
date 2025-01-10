import { IInventoryService, InventoryTypes } from "@srinivasulu-narayanam/framework/types"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

import { Modules } from "@srinivasulu-narayanam/framework/utils"

export const createInventoryLevelsStepId = "create-inventory-levels"
/**
 * This step creates one or more inventory levels.
 */
export const createInventoryLevelsStep = createStep(
  createInventoryLevelsStepId,
  async (data: InventoryTypes.CreateInventoryLevelInput[], { container }) => {
    const service = container.resolve<IInventoryService>(Modules.INVENTORY)

    const inventoryLevels = await service.createInventoryLevels(data)
    return new StepResponse(
      inventoryLevels,
      inventoryLevels.map((level) => level.id)
    )
  },
  async (ids, { container }) => {
    if (!ids?.length) {
      return
    }

    const service = container.resolve<IInventoryService>(Modules.INVENTORY)

    await service.deleteInventoryLevels(ids)
  }
)
