import { defineJoinerConfig, Modules } from "@srinivasulu-narayanam/framework/utils"

export const joinerConfig = defineJoinerConfig(Modules.FILE, {
  models: [{ name: "File" }],
})
