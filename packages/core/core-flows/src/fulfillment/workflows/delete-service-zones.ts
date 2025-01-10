import { WorkflowData, createWorkflow } from "@srinivasulu-narayanam/framework/workflows-sdk"
import { deleteServiceZonesStep } from "../steps"

export const deleteServiceZonesWorkflowId = "delete-service-zones-workflow"
/**
 * This workflow deletes one or more service zones.
 */
export const deleteServiceZonesWorkflow = createWorkflow(
  deleteServiceZonesWorkflowId,
  (input: WorkflowData<{ ids: string[] }>) => {
    deleteServiceZonesStep(input.ids)
  }
)
