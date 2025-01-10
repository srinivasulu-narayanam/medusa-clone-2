import {
  MedusaContainer,
  PaymentCollectionDTO,
} from "@srinivasulu-narayanam/framework/types"
import { refetchEntity } from "@srinivasulu-narayanam/framework/http"

export const refetchPaymentCollection = async (
  id: string,
  scope: MedusaContainer,
  fields: string[]
): Promise<PaymentCollectionDTO> => {
  return refetchEntity("payment_collection", id, scope, fields)
}
