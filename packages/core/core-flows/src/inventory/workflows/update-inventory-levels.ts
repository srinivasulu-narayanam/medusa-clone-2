import { InventoryLevelDTO, InventoryTypes } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"

import { updateInventoryLevelsStep } from "../steps/update-inventory-levels"

export interface UpdateInventoryLevelsWorkflowInput {
  updates: InventoryTypes.BulkUpdateInventoryLevelInput[]
}
export const updateInventoryLevelsWorkflowId =
  "update-inventory-levels-workflow"
/**
 * This workflow updates one or more inventory levels.
 */
export const updateInventoryLevelsWorkflow = createWorkflow(
  updateInventoryLevelsWorkflowId,
  (
    input: WorkflowData<UpdateInventoryLevelsWorkflowInput>
  ): WorkflowResponse<InventoryLevelDTO[]> => {
    return new WorkflowResponse(updateInventoryLevelsStep(input.updates))
  }
)
