import * as entities from "./src/models"
import { defineMikroOrmCliConfig, Modules } from "@srinivasulu-narayanam/framework/utils"

export default defineMikroOrmCliConfig(Modules.NOTIFICATION, {
  entities: Object.values(entities),
})
