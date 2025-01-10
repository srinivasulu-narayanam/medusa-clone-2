import { createWorkflow, WorkflowData } from "@srinivasulu-narayanam/framework/workflows-sdk"

import { deleteShippingProfilesStep } from "../steps"
import { removeRemoteLinkStep } from "../../common"
import { Modules } from "@srinivasulu-narayanam/framework/utils"

export const deleteShippingProfileWorkflowId =
  "delete-shipping-profile-workflow"
/**
 * This workflow deletes one or more shipping profiles.
 */
export const deleteShippingProfileWorkflow = createWorkflow(
  deleteShippingProfileWorkflowId,
  (input: WorkflowData<{ ids: string[] }>) => {
    deleteShippingProfilesStep(input.ids)

    removeRemoteLinkStep({
      [Modules.FULFILLMENT]: { shipping_profile_id: input.ids },
    })
  }
)
