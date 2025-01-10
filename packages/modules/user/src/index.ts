import { UserModuleService } from "@services"
import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"

export default Module(Modules.USER, {
  service: UserModuleService,
})
