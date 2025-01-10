import { Module, Modules } from "@srinivasulu-narayanam/framework/utils"
import { default as loadProviders } from "./loaders/providers"
import LockingModuleService from "./services/locking-module"

export default Module(Modules.LOCKING, {
  service: LockingModuleService,
  loaders: [loadProviders],
})

// Module options types
export { LockingModuleOptions } from "./types"
