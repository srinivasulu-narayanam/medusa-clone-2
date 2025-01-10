const { defineConfig, Modules } = require("@srinivasulu-narayanam/utils")
const os = require("os")
const path = require("path")

const DB_HOST = process.env.DB_HOST
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_TEMP_NAME
const DB_URL = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
process.env.DATABASE_URL = DB_URL
process.env.LOG_LEVEL = "error"

const customFulfillmentProvider = {
  resolve: "@srinivasulu-narayanam/fulfillment-manual",
  id: "test-provider",
}

const customFulfillmentProviderCalculated = {
  resolve: require("./dist/utils/providers/fulfillment-manual-calculated")
    .default,
  id: "test-provider-calculated",
}

module.exports = defineConfig({
  admin: {
    disable: true,
  },
  projectConfig: {
    http: {
      jwtSecret: "test",
    },
  },
  modules: {
    [Modules.FULFILLMENT]: {
      /** @type {import('@srinivasulu-narayanam/fulfillment').FulfillmentModuleOptions} */
      options: {
        providers: [
          customFulfillmentProvider,
          customFulfillmentProviderCalculated,
        ],
      },
    },
    [Modules.NOTIFICATION]: {
      resolve: "@srinivasulu-narayanam/notification",
      options: {
        providers: [
          {
            resolve: "@srinivasulu-narayanam/notification-local",
            id: "local",
            options: {
              name: "Local Notification Provider",
              channels: ["feed"],
            },
          },
        ],
      },
    },
    [Modules.FILE]: {
      resolve: "@srinivasulu-narayanam/file",
      options: {
        providers: [
          {
            resolve: "@srinivasulu-narayanam/file-local",
            id: "local",
            options: {
              // This is the directory where we can reliably write in CI environments
              upload_dir: path.join(os.tmpdir(), "uploads"),
            },
          },
        ],
      },
    },
  },
})
