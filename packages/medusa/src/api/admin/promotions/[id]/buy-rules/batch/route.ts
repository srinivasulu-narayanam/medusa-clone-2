import { batchPromotionRulesWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"
import { BatchMethodRequest, HttpTypes } from "@srinivasulu-narayanam/framework/types"
import { RuleType } from "@srinivasulu-narayanam/framework/utils"
import { refetchBatchRules } from "../../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    BatchMethodRequest<
      HttpTypes.AdminCreatePromotionRule,
      HttpTypes.AdminUpdatePromotionRule
    >
  >,
  res: MedusaResponse<HttpTypes.AdminPromotionRuleBatchResponse>
) => {
  const id = req.params.id
  const { result } = await batchPromotionRulesWorkflow(req.scope).run({
    input: {
      id,
      rule_type: RuleType.BUY_RULES,
      create: req.validatedBody.create,
      update: req.validatedBody.update,
      delete: req.validatedBody.delete,
    },
  })

  const batchResults = await refetchBatchRules(
    result,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json(batchResults)
}
