import { Link } from "@srinivasulu-narayanam/framework/modules-sdk"
import { LinkDefinition } from "@srinivasulu-narayanam/framework/types"
import { ContainerRegistrationKeys } from "@srinivasulu-narayanam/framework/utils"
import { createStep, StepResponse } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const createLinksStepId = "create-remote-links"
/**
 * This step creates remote links between two records of linked data models.
 *
 * Learn more in the [Remote Link documentation.](https://docs.medusajs.com/learn/fundamentals/module-links/remote-link#create-link).
 *
 * @example
 * import {
 *   createWorkflow
 * } from "@srinivasulu-narayanam/framework/workflows-sdk"
 * import {
 *   createRemoteLinkStep
 * } from "@srinivasulu-narayanam/medusa/core-flows"
 * import {
 *   Modules
 * } from "@srinivasulu-narayanam/framework/utils"
 *
 * const helloWorldWorkflow = createWorkflow(
 *   "hello-world",
 *   () => {
 *     createRemoteLinkStep([{
 *       [Modules.PRODUCT]: {
 *         product_id: "prod_123",
 *       },
 *       "helloModuleService": {
 *         my_custom_id: "mc_123",
 *       },
 *     }])
 *   }
 * )
 */
export const createRemoteLinkStep = createStep(
  createLinksStepId,
  async (data: LinkDefinition[], { container }) => {
    const link = container.resolve<Link>(ContainerRegistrationKeys.LINK)

    if (!data.length) {
      return new StepResponse([], [])
    }

    await link.create(data)

    return new StepResponse(data, data)
  },
  async (createdLinks, { container }) => {
    if (!createdLinks) {
      return
    }

    const link = container.resolve<Link>(ContainerRegistrationKeys.LINK)
    await link.dismiss(createdLinks)
  }
)
