import { FulfillmentWorkflow } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
  transform,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { validateShipmentStep } from "../steps"
import { updateFulfillmentWorkflow } from "./update-fulfillment"

export const createShipmentWorkflowId = "create-shipment-workflow"
/**
 * This workflow creates shipments for a fulfillment.
 */
export const createShipmentWorkflow = createWorkflow(
  createShipmentWorkflowId,
  (input: WorkflowData<FulfillmentWorkflow.CreateShipmentWorkflowInput>) => {
    validateShipmentStep(input.id)

    const update = transform({ input }, (data) => ({
      ...data.input,
      shipped_at: new Date(),
    }))

    return new WorkflowResponse(
      updateFulfillmentWorkflow.runAsStep({
        input: update,
      })
    )
  }
)
