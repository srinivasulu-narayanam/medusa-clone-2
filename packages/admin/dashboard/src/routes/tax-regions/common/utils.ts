import { HttpTypes } from "@srinivasulu-narayanam/types"

import { TaxRateRuleTarget } from "./schemas"

export const createTaxRulePayload = (
  target: TaxRateRuleTarget
): HttpTypes.AdminCreateTaxRate["rules"] => {
  return target.references.map((reference) => ({
    reference: target.reference_type,
    reference_id: reference.value,
  }))
}
