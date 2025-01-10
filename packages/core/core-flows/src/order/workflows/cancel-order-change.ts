import { CancelOrderChangeDTO } from "@srinivasulu-narayanam/framework/types"
import { WorkflowData, createWorkflow } from "@srinivasulu-narayanam/framework/workflows-sdk"
import { cancelOrderChangeStep } from "../steps"

export const cancelOrderChangeWorkflowId = "cancel-order-change"
/**
 * This workflow cancels an order change.
 */
export const cancelOrderChangeWorkflow = createWorkflow(
  cancelOrderChangeWorkflowId,
  (input: WorkflowData<CancelOrderChangeDTO>): WorkflowData<void> => {
    cancelOrderChangeStep(input)
  }
)
