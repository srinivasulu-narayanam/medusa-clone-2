import * as entities from "./src/models"

import { defineMikroOrmCliConfig } from "@srinivasulu-narayanam/framework/utils"

export default defineMikroOrmCliConfig("lockingPostgres", {
  entities: Object.values(entities),
})
