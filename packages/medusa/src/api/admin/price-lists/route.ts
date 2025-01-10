import { createPriceListsWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"
import { fetchPriceList, transformPriceList } from "./helpers"
import { AdminCreatePriceListType } from "./validators"
import { HttpTypes } from "@srinivasulu-narayanam/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminPriceListListParams>,
  res: MedusaResponse<HttpTypes.AdminPriceListListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "price_list",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: priceLists, metadata } = await remoteQuery(queryObject)

  res.json({
    price_lists: priceLists.map((priceList) => transformPriceList(priceList)),
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminCreatePriceListType>,
  res: MedusaResponse<HttpTypes.AdminPriceListResponse>
) => {
  const workflow = createPriceListsWorkflow(req.scope)
  const { result } = await workflow.run({
    input: { price_lists_data: [req.validatedBody] },
  })

  const price_list = await fetchPriceList(
    result[0].id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ price_list })
}
