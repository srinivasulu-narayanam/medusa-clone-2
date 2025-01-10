import { defineMikroOrmCliConfig, Modules } from "@srinivasulu-narayanam/framework/utils"
import * as entities from "./src/models"

export default defineMikroOrmCliConfig(Modules.PRODUCT, {
  entities: Object.values(entities),
})
