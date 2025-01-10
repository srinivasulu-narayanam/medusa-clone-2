import { IUserModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deleteInvitesStepId = "delete-invites-step"
/**
 * This step deletes one or more invites.
 */
export const deleteInvitesStep = createStep(
  deleteInvitesStepId,
  async (input: string[], { container }) => {
    const service: IUserModuleService = container.resolve(Modules.USER)

    await service.softDeleteInvites(input)

    return new StepResponse(void 0, input)
  },
  async (deletedInviteIds, { container }) => {
    if (!deletedInviteIds?.length) {
      return
    }

    const service: IUserModuleService = container.resolve(Modules.USER)

    await service.restoreInvites(deletedInviteIds)
  }
)
