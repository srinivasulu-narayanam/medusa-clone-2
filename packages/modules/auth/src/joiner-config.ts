import { defineJoinerConfig, Modules } from "@srinivasulu-narayanam/framework/utils"
import { AuthIdentity, ProviderIdentity } from "@models"

export const joinerConfig = defineJoinerConfig(Modules.AUTH, {
  models: [AuthIdentity, ProviderIdentity],
})
