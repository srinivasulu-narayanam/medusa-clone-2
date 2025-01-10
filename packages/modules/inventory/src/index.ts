import InventoryModuleService from "./services/inventory-module"
import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"

export default Module(Modules.INVENTORY, {
  service: InventoryModuleService,
})
