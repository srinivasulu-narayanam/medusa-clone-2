import { IModuleService, ModuleJoinerConfig } from "@srinivasulu-narayanam/types"
import { defineJoinerConfig } from "@srinivasulu-narayanam/utils"

export class ModuleService implements IModuleService {
  __joinerConfig(): ModuleJoinerConfig {
    return defineJoinerConfig("module-service", {
      alias: [
        {
          name: ["custom_name"],
          entity: "Custom",
        },
      ],
    })
  }
}
