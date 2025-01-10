import { BigNumberInput } from "@srinivasulu-narayanam/framework/types"

export interface CreateLineItemAdjustmentDTO {
  item_id: string
  amount: BigNumberInput
  code?: string
  description?: string
  promotion_id?: string
  provider_id?: string
}

export interface UpdateLineItemAdjustmentDTO
  extends Partial<CreateLineItemAdjustmentDTO> {
  id: string
}
