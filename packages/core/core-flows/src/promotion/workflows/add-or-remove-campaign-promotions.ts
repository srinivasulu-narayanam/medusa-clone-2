import { LinkWorkflowInput } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  createWorkflow,
  parallelize,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import {
  addCampaignPromotionsStep,
  removeCampaignPromotionsStep,
} from "../steps"

export const addOrRemoveCampaignPromotionsWorkflowId =
  "add-or-remove-campaign-promotions"
/**
 * This workflow adds or removes promotions from campaigns.
 */
export const addOrRemoveCampaignPromotionsWorkflow = createWorkflow(
  addOrRemoveCampaignPromotionsWorkflowId,
  (input: WorkflowData<LinkWorkflowInput>): WorkflowData<void> => {
    parallelize(
      addCampaignPromotionsStep(input),
      removeCampaignPromotionsStep(input)
    )
  }
)
