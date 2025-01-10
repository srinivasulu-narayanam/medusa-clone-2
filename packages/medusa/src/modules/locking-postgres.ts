import PostgresLockingProvider from "@srinivasulu-narayanam/locking-postgres"

export * from "@srinivasulu-narayanam/locking-postgres"

export default PostgresLockingProvider
export const discoveryPath = require.resolve("@srinivasulu-narayanam/locking-postgres")
