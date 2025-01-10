import { defineMikroOrmCliConfig, Modules } from "@srinivasulu-narayanam/framework/utils"
import * as entities from "./src/models"

export default defineMikroOrmCliConfig(Modules.TAX, {
  entities: Object.values(entities),
})
