import { IApiKeyModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deleteApiKeysStepId = "delete-api-keys"
/**
 * This step deletes one or more API keys.
 */
export const deleteApiKeysStep = createStep(
  { name: deleteApiKeysStepId, noCompensation: true },
  async (ids: string[], { container }) => {
    const service = container.resolve<IApiKeyModuleService>(Modules.API_KEY)

    await service.deleteApiKeys(ids)
    return new StepResponse(void 0)
  },
  async () => {}
)
