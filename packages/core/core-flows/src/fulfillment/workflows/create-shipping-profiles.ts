import { FulfillmentWorkflow } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { createShippingProfilesStep } from "../steps"

export const createShippingProfilesWorkflowId =
  "create-shipping-profiles-workflow"
/**
 * This workflow creates one or more shipping profiles.
 */
export const createShippingProfilesWorkflow = createWorkflow(
  createShippingProfilesWorkflowId,
  (
    input: WorkflowData<FulfillmentWorkflow.CreateShippingProfilesWorkflowInput>
  ): WorkflowResponse<FulfillmentWorkflow.CreateShippingProfilesWorkflowOutput> => {
    return new WorkflowResponse(createShippingProfilesStep(input.data))
  }
)
