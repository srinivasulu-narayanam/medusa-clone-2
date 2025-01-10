import { AdminExchangeResponse } from "@srinivasulu-narayanam/framework/types"
import { MedusaError } from "@srinivasulu-narayanam/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  refetchEntity,
} from "@srinivasulu-narayanam/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<AdminExchangeResponse>
) => {
  const exchange = await refetchEntity(
    "order_exchange",
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  if (!exchange) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      `Exchange with id: ${req.params.id} was not found`
    )
  }

  res.status(200).json({ exchange })
}
