import { batchLinkProductsToCategoryWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  AdminProductCategoryResponse,
  LinkMethodRequest,
} from "@srinivasulu-narayanam/framework/types"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  refetchEntity,
} from "@srinivasulu-narayanam/framework/http"

export const POST = async (
  req: AuthenticatedMedusaRequest<LinkMethodRequest>,
  res: MedusaResponse<AdminProductCategoryResponse>
) => {
  const { id } = req.params

  await batchLinkProductsToCategoryWorkflow(req.scope).run({
    input: { id, ...req.validatedBody },
  })

  const category = await refetchEntity(
    "product_category",
    id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ product_category: category })
}
