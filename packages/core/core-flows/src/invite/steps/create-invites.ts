import { CreateInviteDTO, IUserModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const createInviteStepId = "create-invite-step"
/**
 * This step creates one or more invites.
 */
export const createInviteStep = createStep(
  createInviteStepId,
  async (input: CreateInviteDTO[], { container }) => {
    const service: IUserModuleService = container.resolve(Modules.USER)

    const createdInvites = await service.createInvites(input)

    return new StepResponse(
      createdInvites,
      createdInvites.map((inv) => inv.id)
    )
  },
  async (createdInvitesIds, { container }) => {
    if (!createdInvitesIds?.length) {
      return
    }

    const service: IUserModuleService = container.resolve(Modules.USER)

    await service.deleteInvites(createdInvitesIds)
  }
)
