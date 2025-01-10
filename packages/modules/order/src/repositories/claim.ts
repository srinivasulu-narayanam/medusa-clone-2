import { DALUtils } from "@srinivasulu-narayanam/framework/utils"
import { OrderClaim } from "@models"
import { setFindMethods } from "../utils/base-repository-find"

export class OrderClaimRepository extends DALUtils.mikroOrmBaseRepositoryFactory(
  OrderClaim
) {}

setFindMethods(OrderClaimRepository, OrderClaim)
