import {
  IPromotionModuleService,
  LinkWorkflowInput,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import {
  StepResponse,
  WorkflowData,
  createStep,
} from "@srinivasulu-narayanam/framework/workflows-sdk"

export const removeCampaignPromotionsStepId = "remove-campaign-promotions"
/**
 * This step removes promotions from a campaigns.
 */
export const removeCampaignPromotionsStep = createStep(
  removeCampaignPromotionsStepId,
  async (input: WorkflowData<LinkWorkflowInput>, { container }) => {
    const { id: campaignId, remove: promotionIdsToRemove = [] } = input
    const promotionModule = container.resolve<IPromotionModuleService>(
      Modules.PROMOTION
    )

    if (promotionIdsToRemove.length) {
      await promotionModule.removePromotionsFromCampaign({
        id: campaignId,
        promotion_ids: promotionIdsToRemove,
      })
    }

    return new StepResponse(null, input)
  },
  async (data, { container }) => {
    if (!data) {
      return
    }

    const { id: campaignId, remove: promotionIdsToAdd = [] } = data
    const promotionModule = container.resolve<IPromotionModuleService>(
      Modules.PROMOTION
    )

    if (promotionIdsToAdd.length) {
      await promotionModule.addPromotionsToCampaign({
        id: campaignId,
        promotion_ids: promotionIdsToAdd,
      })
    }
  }
)
