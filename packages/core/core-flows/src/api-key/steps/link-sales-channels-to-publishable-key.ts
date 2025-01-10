import { LinkWorkflowInput } from "@srinivasulu-narayanam/framework/types"
import {
  ContainerRegistrationKeys,
  Modules,
  promiseAll,
} from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const linkSalesChannelsToApiKeyStepId = "link-sales-channels-to-api-key"
/**
 * This step links sales channels to API keys.
 */
export const linkSalesChannelsToApiKeyStep = createStep(
  linkSalesChannelsToApiKeyStepId,
  async (input: LinkWorkflowInput, { container }) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.LINK)
    if (!input || (!input.add?.length && !input.remove?.length)) {
      return
    }

    const linksToCreate = (input.add ?? []).map((salesChannelId) => {
      return {
        [Modules.API_KEY]: {
          publishable_key_id: input.id,
        },
        [Modules.SALES_CHANNEL]: {
          sales_channel_id: salesChannelId,
        },
      }
    })

    const linksToDismiss = (input.remove ?? []).map((salesChannelId) => {
      return {
        [Modules.API_KEY]: {
          publishable_key_id: input.id,
        },
        [Modules.SALES_CHANNEL]: {
          sales_channel_id: salesChannelId,
        },
      }
    })

    const promises: Promise<any>[] = []
    if (linksToCreate.length) {
      promises.push(remoteLink.create(linksToCreate))
    }
    if (linksToDismiss.length) {
      promises.push(remoteLink.dismiss(linksToDismiss))
    }
    await promiseAll(promises)

    return new StepResponse(void 0, { linksToCreate, linksToDismiss })
  },
  async (prevData, { container }) => {
    if (!prevData) {
      return
    }

    const remoteLink = container.resolve(ContainerRegistrationKeys.LINK)
    if (prevData.linksToCreate.length) {
      await remoteLink.dismiss(prevData.linksToCreate)
    }

    if (prevData.linksToDismiss.length) {
      await remoteLink.create(prevData.linksToDismiss)
    }
  }
)
