import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"

import { WorkflowTypes } from "@srinivasulu-narayanam/framework/types"
import { createReservationsStep } from "../steps"

export const createReservationsWorkflowId = "create-reservations-workflow"
/**
 * This workflow creates one or more reservations.
 */
export const createReservationsWorkflow = createWorkflow(
  createReservationsWorkflowId,
  (
    input: WorkflowData<WorkflowTypes.ReservationWorkflow.CreateReservationsWorkflowInput>
  ): WorkflowResponse<WorkflowTypes.ReservationWorkflow.CreateReservationsWorkflowOutput> => {
    return new WorkflowResponse(createReservationsStep(input.reservations))
  }
)
