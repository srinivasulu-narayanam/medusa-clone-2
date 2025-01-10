import { DeclineOrderChangeDTO } from "@srinivasulu-narayanam/framework/types"
import { WorkflowData, createWorkflow } from "@srinivasulu-narayanam/framework/workflows-sdk"
import { declineOrderChangeStep } from "../steps"

export const declineOrderChangeWorkflowId = "decline-order-change"
/**
 * This workflow declines an order change.
 */
export const declineOrderChangeWorkflow = createWorkflow(
  declineOrderChangeWorkflowId,
  (input: WorkflowData<DeclineOrderChangeDTO>): WorkflowData<void> => {
    declineOrderChangeStep(input)
  }
)
