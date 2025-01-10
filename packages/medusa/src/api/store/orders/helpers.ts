import { MedusaContainer } from "@srinivasulu-narayanam/framework/types"
import { refetchEntity } from "@srinivasulu-narayanam/framework/http"

export const refetchOrder = async (
  idOrFilter: string | object,
  scope: MedusaContainer,
  fields: string[]
) => {
  return await refetchEntity("order", idOrFilter, scope, fields)
}
