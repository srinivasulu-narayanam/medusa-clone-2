import { ModuleProvider, Modules } from "@srinivasulu-narayanam/framework/utils"
import Loader from "./loaders"
import { RedisLockingProvider } from "./services/redis-lock"

const services = [RedisLockingProvider]
const loaders = [Loader]

export default ModuleProvider(Modules.LOCKING, {
  services,
  loaders,
})
