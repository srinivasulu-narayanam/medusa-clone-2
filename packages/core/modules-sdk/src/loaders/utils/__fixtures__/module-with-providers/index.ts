import { ModuleExports } from "@srinivasulu-narayanam/types"
import { ModuleService } from "./services/module-service"
import { Module } from "@srinivasulu-narayanam/utils"

const moduleExports: ModuleExports = {
  service: ModuleService,
}

export * from "./services/module-service"

export default Module("module-with-providers", moduleExports)
