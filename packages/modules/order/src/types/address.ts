import { OrderTypes } from "@srinivasulu-narayanam/framework/types"

export type UpsertOrderAddressDTO = OrderTypes.UpsertOrderAddressDTO

export interface UpdateOrderAddressDTO extends UpsertOrderAddressDTO {
  id: string
}

export interface CreateOrderAddressDTO extends UpsertOrderAddressDTO {}

export type OrderAddressDTO = OrderTypes.OrderAddressDTO
