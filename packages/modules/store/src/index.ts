import { StoreModuleService } from "@services"
import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"

export default Module(Modules.STORE, {
  service: StoreModuleService,
})
