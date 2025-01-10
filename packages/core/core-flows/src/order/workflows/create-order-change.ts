import { CreateOrderChangeDTO, OrderChangeDTO } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { createOrderChangeStep } from "../steps"

export const createOrderChangeWorkflowId = "create-order-change"
/**
 * This workflow creates an order change.
 */
export const createOrderChangeWorkflow = createWorkflow(
  createOrderChangeWorkflowId,
  (
    input: WorkflowData<CreateOrderChangeDTO>
  ): WorkflowResponse<OrderChangeDTO> => {
    return new WorkflowResponse(createOrderChangeStep(input))
  }
)
