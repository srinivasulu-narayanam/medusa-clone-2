import { defineJoinerConfig, Modules } from "@srinivasulu-narayanam/framework/utils"
import { default as schema } from "./schema"

export const joinerConfig = defineJoinerConfig(Modules.SALES_CHANNEL, {
  schema,
})
