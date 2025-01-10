import { CustomerModuleService } from "@services"
import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"

export default Module(Modules.CUSTOMER, {
  service: CustomerModuleService,
})
