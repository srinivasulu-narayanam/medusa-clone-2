import { FulfillmentWorkflow } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { updateFulfillmentStep } from "../steps"

export const updateFulfillmentWorkflowId = "update-fulfillment-workflow"
/**
 * This workflow updates a fulfillment.
 */
export const updateFulfillmentWorkflow = createWorkflow(
  updateFulfillmentWorkflowId,
  (input: WorkflowData<FulfillmentWorkflow.UpdateFulfillmentWorkflowInput>) => {
    return new WorkflowResponse(updateFulfillmentStep(input))
  }
)
