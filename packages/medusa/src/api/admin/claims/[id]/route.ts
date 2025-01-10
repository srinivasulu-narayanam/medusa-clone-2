import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  refetchEntity,
} from "@srinivasulu-narayanam/framework/http"
import { MedusaError } from "@srinivasulu-narayanam/framework/utils"
import { AdminClaimResponse } from "@srinivasulu-narayanam/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<AdminClaimResponse>
) => {
  const claim = await refetchEntity(
    "order_claim",
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  if (!claim) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      `Claim with id: ${req.params.id} was not found`
    )
  }

  res.status(200).json({ claim })
}
