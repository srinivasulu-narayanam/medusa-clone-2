import { OrderLineItemDTO } from "@srinivasulu-narayanam/types"

export const getFulfillableQuantity = (item: OrderLineItemDTO) => {
  return item.quantity - item.detail.fulfilled_quantity
}
