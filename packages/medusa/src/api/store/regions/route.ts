import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"
import { HttpTypes } from "@srinivasulu-narayanam/framework/types"
import { MedusaRequest, MedusaResponse } from "@srinivasulu-narayanam/framework/http"

export const GET = async (
  req: MedusaRequest<HttpTypes.StoreRegionFilters>,
  res: MedusaResponse<HttpTypes.StoreRegionListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "region",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: regions, metadata } = await remoteQuery(queryObject)

  res.json({
    regions,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
