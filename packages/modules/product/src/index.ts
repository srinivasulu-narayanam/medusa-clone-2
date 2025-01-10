import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"
import { ProductModuleService } from "@services"

export default Module(Modules.PRODUCT, {
  service: ProductModuleService,
})
