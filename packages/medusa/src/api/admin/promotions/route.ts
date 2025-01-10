import { createPromotionsWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"
import { refetchPromotion } from "./helpers"
import { AdditionalData, HttpTypes } from "@srinivasulu-narayanam/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetPromotionsParams>,
  res: MedusaResponse<HttpTypes.AdminPromotionListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "promotion",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: promotions, metadata } = await remoteQuery(queryObject)

  res.json({
    promotions,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminCreatePromotion & AdditionalData
  >,
  res: MedusaResponse<HttpTypes.AdminPromotionResponse>
) => {
  const { additional_data, ...rest } = req.validatedBody
  const createPromotions = createPromotionsWorkflow(req.scope)
  const promotionsData = [rest] as any

  const { result } = await createPromotions.run({
    input: { promotionsData, additional_data },
  })

  const promotion = await refetchPromotion(
    result[0].id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ promotion })
}
