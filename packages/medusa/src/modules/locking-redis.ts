import RedisLockingProvider from "@srinivasulu-narayanam/locking-redis"

export * from "@srinivasulu-narayanam/locking-redis"

export default RedisLockingProvider
export const discoveryPath = require.resolve("@srinivasulu-narayanam/locking-redis")
