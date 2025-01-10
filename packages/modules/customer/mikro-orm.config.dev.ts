import * as entities from "./src/models"
import { defineMikroOrmCliConfig, Modules } from "@srinivasulu-narayanam/framework/utils"

export default defineMikroOrmCliConfig(Modules.CUSTOMER, {
  entities: Object.values(entities),
})
