import { IUserModuleService } from "@srinivasulu-narayanam/framework/types"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

import { Modules } from "@srinivasulu-narayanam/framework/utils"

export const refreshInviteTokensStepId = "refresh-invite-tokens-step"
/**
 * This step refreshes the tokens of one or more invites.
 */
export const refreshInviteTokensStep = createStep(
  refreshInviteTokensStepId,
  async (input: string[], { container }) => {
    const service: IUserModuleService = container.resolve(Modules.USER)

    const invites = await service.refreshInviteTokens(input)

    return new StepResponse(invites)
  }
)
