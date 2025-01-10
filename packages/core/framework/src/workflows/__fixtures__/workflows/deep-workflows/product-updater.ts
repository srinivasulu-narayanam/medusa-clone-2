import {
  createStep,
  createWorkflow,
  WorkflowResponse,
} from "@srinivasulu-narayanam/workflows-sdk"

export const productWorkflowId = "product-notifier-workflow"

const step = createStep("product-step", () => {
  return {} as any
})

export const productUpdatedWorkflow = createWorkflow(productWorkflowId, () => {
  step()
  return new WorkflowResponse(void 0)
})
