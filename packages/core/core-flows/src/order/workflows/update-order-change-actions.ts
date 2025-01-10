import {
  OrderChangeActionDTO,
  UpdateOrderChangeActionDTO,
} from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { updateOrderChangeActionsStep } from "../steps"

export const updateOrderChangeActionsWorkflowId = "update-order-change-actions"
/**
 * This workflow updates one or more order change actions.
 */
export const updateOrderChangeActionsWorkflow = createWorkflow(
  updateOrderChangeActionsWorkflowId,
  (
    input: WorkflowData<UpdateOrderChangeActionDTO[]>
  ): WorkflowResponse<OrderChangeActionDTO[]> => {
    return new WorkflowResponse(updateOrderChangeActionsStep(input))
  }
)
