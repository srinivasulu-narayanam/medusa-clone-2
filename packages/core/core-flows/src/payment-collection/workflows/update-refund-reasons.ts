import {
  RefundReasonDTO,
  UpdateRefundReasonDTO,
} from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { updateRefundReasonsStep } from "../steps"

export const updateRefundReasonsWorkflowId = "update-refund-reasons"
/**
 * This workflow updates one or more refund reasons.
 */
export const updateRefundReasonsWorkflow = createWorkflow(
  updateRefundReasonsWorkflowId,
  (
    input: WorkflowData<UpdateRefundReasonDTO[]>
  ): WorkflowResponse<RefundReasonDTO[]> => {
    return new WorkflowResponse(updateRefundReasonsStep(input))
  }
)
