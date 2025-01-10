import { RegionWorkflowEvents } from "@srinivasulu-narayanam/framework/utils"
import {
  WorkflowData,
  createWorkflow,
  transform,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { emitEventStep } from "../../common/steps/emit-event"
import { deleteRegionsStep } from "../steps"

export type DeleteRegionsWorkflowInput = { ids: string[] }

export const deleteRegionsWorkflowId = "delete-regions"
/**
 * This workflow deletes one or more regions.
 */
export const deleteRegionsWorkflow = createWorkflow(
  deleteRegionsWorkflowId,
  (input: WorkflowData<DeleteRegionsWorkflowInput>): WorkflowData<void> => {
    deleteRegionsStep(input.ids)

    const regionIdEvents = transform({ input }, ({ input }) => {
      return input.ids?.map((id) => {
        return { id }
      })
    })

    emitEventStep({
      eventName: RegionWorkflowEvents.DELETED,
      data: regionIdEvents,
    })
  }
)
