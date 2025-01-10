import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"

import { linkSalesChannelsToStockLocationWorkflow } from "@srinivasulu-narayanam/core-flows"
import { HttpTypes, LinkMethodRequest } from "@srinivasulu-narayanam/framework/types"
import { refetchStockLocation } from "../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest<LinkMethodRequest>,
  res: MedusaResponse<HttpTypes.AdminStockLocationResponse>
) => {
  const { id } = req.params
  const { add, remove } = req.validatedBody

  const workflow = linkSalesChannelsToStockLocationWorkflow(req.scope)
  await workflow.run({
    input: {
      id,
      add,
      remove,
    },
  })

  const stockLocation = await refetchStockLocation(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ stock_location: stockLocation })
}
