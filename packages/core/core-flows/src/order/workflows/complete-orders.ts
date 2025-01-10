import { AdditionalData } from "@srinivasulu-narayanam/framework/types"
import { OrderWorkflowEvents } from "@srinivasulu-narayanam/framework/utils"
import {
  WorkflowData,
  WorkflowResponse,
  createHook,
  createWorkflow,
  transform,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { emitEventStep } from "../../common/steps/emit-event"
import { completeOrdersStep } from "../steps"

export type CompleteOrdersWorkflowInput = {
  orderIds: string[]
} & AdditionalData

export const completeOrderWorkflowId = "complete-order-workflow"
/**
 * This workflow completes one or more orders.
 */
export const completeOrderWorkflow = createWorkflow(
  completeOrderWorkflowId,
  (input: WorkflowData<CompleteOrdersWorkflowInput>) => {
    const completedOrders = completeOrdersStep(input)

    const eventData = transform({ input }, (data) => {
      return data.input.orderIds.map((id) => ({ id }))
    })

    emitEventStep({
      eventName: OrderWorkflowEvents.COMPLETED,
      data: eventData,
    })

    const ordersCompleted = createHook("ordersCompleted", {
      orders: completedOrders,
      additional_data: input.additional_data,
    })

    return new WorkflowResponse(completedOrders, {
      hooks: [ordersCompleted],
    })
  }
)
