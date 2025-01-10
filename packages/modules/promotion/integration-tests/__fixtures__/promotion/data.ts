import { CreatePromotionDTO } from "@srinivasulu-narayanam/framework/types"
import { PromotionType } from "@srinivasulu-narayanam/framework/utils"

export const defaultPromotionsData: CreatePromotionDTO[] = [
  {
    id: "promotion-id-1",
    code: "PROMOTION_1",
    type: PromotionType.STANDARD,
    application_method: {
      currency_code: "USD",
      target_type: "items",
      type: "fixed",
      allocation: "across",
      value: 1000,
    },
  },
  {
    id: "promotion-id-2",
    code: "PROMOTION_2",
    type: PromotionType.STANDARD,
    application_method: {
      currency_code: "USD",
      target_type: "items",
      type: "fixed",
      allocation: "across",
      value: 1000,
    },
  },
]
