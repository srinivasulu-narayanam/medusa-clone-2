import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"
import { OrderModuleService } from "@services"

export default Module(Modules.ORDER, {
  service: OrderModuleService,
})
