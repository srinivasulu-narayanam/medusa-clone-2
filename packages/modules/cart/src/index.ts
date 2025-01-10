import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"
import { CartModuleService } from "./services"

export default Module(Modules.CART, {
  service: CartModuleService,
})
