import { IFulfillmentModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deleteShippingProfilesStepId = "delete-shipping-profile"
/**
 * This step deletes one or more shipping profiles.
 */
export const deleteShippingProfilesStep = createStep(
  deleteShippingProfilesStepId,
  async (ids: string[], { container }) => {
    const service = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    await service.softDeleteShippingProfiles(ids)

    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    await service.restoreShippingProfiles(prevIds)
  }
)
