import { Modules } from "../../modules-sdk"
import { DEFAULT_STORE_RESTRICTED_FIELDS, defineConfig } from "../define-config"

describe("defineConfig", function () {
  it("should merge empty config with the defaults", function () {
    expect(defineConfig()).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@srinivasulu-narayanam/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@srinivasulu-narayanam/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/auth",
          },
          "cache": {
            "resolve": "@srinivasulu-narayanam/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@srinivasulu-narayanam/medusa/cart",
          },
          "currency": {
            "resolve": "@srinivasulu-narayanam/medusa/currency",
          },
          "customer": {
            "resolve": "@srinivasulu-narayanam/medusa/customer",
          },
          "event_bus": {
            "resolve": "@srinivasulu-narayanam/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@srinivasulu-narayanam/medusa/file-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@srinivasulu-narayanam/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@srinivasulu-narayanam/medusa/inventory",
          },
          "locking": {
            "resolve": "@srinivasulu-narayanam/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@srinivasulu-narayanam/medusa/notification-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/notification",
          },
          "order": {
            "resolve": "@srinivasulu-narayanam/medusa/order",
          },
          "payment": {
            "resolve": "@srinivasulu-narayanam/medusa/payment",
          },
          "pricing": {
            "resolve": "@srinivasulu-narayanam/medusa/pricing",
          },
          "product": {
            "resolve": "@srinivasulu-narayanam/medusa/product",
          },
          "promotion": {
            "resolve": "@srinivasulu-narayanam/medusa/promotion",
          },
          "region": {
            "resolve": "@srinivasulu-narayanam/medusa/region",
          },
          "sales_channel": {
            "resolve": "@srinivasulu-narayanam/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@srinivasulu-narayanam/medusa/stock-location",
          },
          "store": {
            "resolve": "@srinivasulu-narayanam/medusa/store",
          },
          "tax": {
            "resolve": "@srinivasulu-narayanam/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@srinivasulu-narayanam/medusa/user",
          },
          "workflows": {
            "resolve": "@srinivasulu-narayanam/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom modules", function () {
    expect(
      defineConfig({
        modules: {
          GithubModuleService: {
            resolve: "./modules/github",
          },
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleService": {
            "resolve": "./modules/github",
          },
          "api_key": {
            "resolve": "@srinivasulu-narayanam/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@srinivasulu-narayanam/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/auth",
          },
          "cache": {
            "resolve": "@srinivasulu-narayanam/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@srinivasulu-narayanam/medusa/cart",
          },
          "currency": {
            "resolve": "@srinivasulu-narayanam/medusa/currency",
          },
          "customer": {
            "resolve": "@srinivasulu-narayanam/medusa/customer",
          },
          "event_bus": {
            "resolve": "@srinivasulu-narayanam/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@srinivasulu-narayanam/medusa/file-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@srinivasulu-narayanam/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@srinivasulu-narayanam/medusa/inventory",
          },
          "locking": {
            "resolve": "@srinivasulu-narayanam/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@srinivasulu-narayanam/medusa/notification-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/notification",
          },
          "order": {
            "resolve": "@srinivasulu-narayanam/medusa/order",
          },
          "payment": {
            "resolve": "@srinivasulu-narayanam/medusa/payment",
          },
          "pricing": {
            "resolve": "@srinivasulu-narayanam/medusa/pricing",
          },
          "product": {
            "resolve": "@srinivasulu-narayanam/medusa/product",
          },
          "promotion": {
            "resolve": "@srinivasulu-narayanam/medusa/promotion",
          },
          "region": {
            "resolve": "@srinivasulu-narayanam/medusa/region",
          },
          "sales_channel": {
            "resolve": "@srinivasulu-narayanam/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@srinivasulu-narayanam/medusa/stock-location",
          },
          "store": {
            "resolve": "@srinivasulu-narayanam/medusa/store",
          },
          "tax": {
            "resolve": "@srinivasulu-narayanam/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@srinivasulu-narayanam/medusa/user",
          },
          "workflows": {
            "resolve": "@srinivasulu-narayanam/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom modules when an array is provided", function () {
    expect(
      defineConfig({
        modules: [
          {
            resolve: require.resolve("../__fixtures__/define-config/github"),
            options: {
              apiKey: "test",
            },
          },
        ],
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleService": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "${require.resolve(
              "../__fixtures__/define-config/github"
            )}",
          },
          "api_key": {
            "resolve": "@srinivasulu-narayanam/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@srinivasulu-narayanam/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/auth",
          },
          "cache": {
            "resolve": "@srinivasulu-narayanam/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@srinivasulu-narayanam/medusa/cart",
          },
          "currency": {
            "resolve": "@srinivasulu-narayanam/medusa/currency",
          },
          "customer": {
            "resolve": "@srinivasulu-narayanam/medusa/customer",
          },
          "event_bus": {
            "resolve": "@srinivasulu-narayanam/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@srinivasulu-narayanam/medusa/file-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@srinivasulu-narayanam/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@srinivasulu-narayanam/medusa/inventory",
          },
          "locking": {
            "resolve": "@srinivasulu-narayanam/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@srinivasulu-narayanam/medusa/notification-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/notification",
          },
          "order": {
            "resolve": "@srinivasulu-narayanam/medusa/order",
          },
          "payment": {
            "resolve": "@srinivasulu-narayanam/medusa/payment",
          },
          "pricing": {
            "resolve": "@srinivasulu-narayanam/medusa/pricing",
          },
          "product": {
            "resolve": "@srinivasulu-narayanam/medusa/product",
          },
          "promotion": {
            "resolve": "@srinivasulu-narayanam/medusa/promotion",
          },
          "region": {
            "resolve": "@srinivasulu-narayanam/medusa/region",
          },
          "sales_channel": {
            "resolve": "@srinivasulu-narayanam/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@srinivasulu-narayanam/medusa/stock-location",
          },
          "store": {
            "resolve": "@srinivasulu-narayanam/medusa/store",
          },
          "tax": {
            "resolve": "@srinivasulu-narayanam/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@srinivasulu-narayanam/medusa/user",
          },
          "workflows": {
            "resolve": "@srinivasulu-narayanam/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom modules when an array is provided with a key to override the module registration name", function () {
    expect(
      defineConfig({
        modules: [
          {
            key: "GithubModuleServiceOverride",
            resolve: require.resolve("../__fixtures__/define-config/github"),
            options: {
              apiKey: "test",
            },
          },
        ],
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleServiceOverride": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "${require.resolve(
              "../__fixtures__/define-config/github"
            )}",
          },
          "api_key": {
            "resolve": "@srinivasulu-narayanam/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@srinivasulu-narayanam/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/auth",
          },
          "cache": {
            "resolve": "@srinivasulu-narayanam/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@srinivasulu-narayanam/medusa/cart",
          },
          "currency": {
            "resolve": "@srinivasulu-narayanam/medusa/currency",
          },
          "customer": {
            "resolve": "@srinivasulu-narayanam/medusa/customer",
          },
          "event_bus": {
            "resolve": "@srinivasulu-narayanam/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@srinivasulu-narayanam/medusa/file-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@srinivasulu-narayanam/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@srinivasulu-narayanam/medusa/inventory",
          },
          "locking": {
            "resolve": "@srinivasulu-narayanam/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@srinivasulu-narayanam/medusa/notification-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/notification",
          },
          "order": {
            "resolve": "@srinivasulu-narayanam/medusa/order",
          },
          "payment": {
            "resolve": "@srinivasulu-narayanam/medusa/payment",
          },
          "pricing": {
            "resolve": "@srinivasulu-narayanam/medusa/pricing",
          },
          "product": {
            "resolve": "@srinivasulu-narayanam/medusa/product",
          },
          "promotion": {
            "resolve": "@srinivasulu-narayanam/medusa/promotion",
          },
          "region": {
            "resolve": "@srinivasulu-narayanam/medusa/region",
          },
          "sales_channel": {
            "resolve": "@srinivasulu-narayanam/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@srinivasulu-narayanam/medusa/stock-location",
          },
          "store": {
            "resolve": "@srinivasulu-narayanam/medusa/store",
          },
          "tax": {
            "resolve": "@srinivasulu-narayanam/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@srinivasulu-narayanam/medusa/user",
          },
          "workflows": {
            "resolve": "@srinivasulu-narayanam/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom project.http config", function () {
    expect(
      defineConfig({
        projectConfig: {
          http: {
            adminCors: "http://localhost:3000",
          } as any,
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@srinivasulu-narayanam/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@srinivasulu-narayanam/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/auth",
          },
          "cache": {
            "resolve": "@srinivasulu-narayanam/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@srinivasulu-narayanam/medusa/cart",
          },
          "currency": {
            "resolve": "@srinivasulu-narayanam/medusa/currency",
          },
          "customer": {
            "resolve": "@srinivasulu-narayanam/medusa/customer",
          },
          "event_bus": {
            "resolve": "@srinivasulu-narayanam/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@srinivasulu-narayanam/medusa/file-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@srinivasulu-narayanam/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@srinivasulu-narayanam/medusa/inventory",
          },
          "locking": {
            "resolve": "@srinivasulu-narayanam/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@srinivasulu-narayanam/medusa/notification-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/notification",
          },
          "order": {
            "resolve": "@srinivasulu-narayanam/medusa/order",
          },
          "payment": {
            "resolve": "@srinivasulu-narayanam/medusa/payment",
          },
          "pricing": {
            "resolve": "@srinivasulu-narayanam/medusa/pricing",
          },
          "product": {
            "resolve": "@srinivasulu-narayanam/medusa/product",
          },
          "promotion": {
            "resolve": "@srinivasulu-narayanam/medusa/promotion",
          },
          "region": {
            "resolve": "@srinivasulu-narayanam/medusa/region",
          },
          "sales_channel": {
            "resolve": "@srinivasulu-narayanam/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@srinivasulu-narayanam/medusa/stock-location",
          },
          "store": {
            "resolve": "@srinivasulu-narayanam/medusa/store",
          },
          "tax": {
            "resolve": "@srinivasulu-narayanam/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@srinivasulu-narayanam/medusa/user",
          },
          "workflows": {
            "resolve": "@srinivasulu-narayanam/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should not include disabled modules", function () {
    expect(
      defineConfig({
        projectConfig: {
          http: {
            adminCors: "http://localhost:3000",
          } as any,
        },
        modules: {
          [Modules.CART]: false,
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@srinivasulu-narayanam/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@srinivasulu-narayanam/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/auth",
          },
          "cache": {
            "resolve": "@srinivasulu-narayanam/medusa/cache-inmemory",
          },
          "currency": {
            "resolve": "@srinivasulu-narayanam/medusa/currency",
          },
          "customer": {
            "resolve": "@srinivasulu-narayanam/medusa/customer",
          },
          "event_bus": {
            "resolve": "@srinivasulu-narayanam/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@srinivasulu-narayanam/medusa/file-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@srinivasulu-narayanam/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@srinivasulu-narayanam/medusa/inventory",
          },
          "locking": {
            "resolve": "@srinivasulu-narayanam/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@srinivasulu-narayanam/medusa/notification-local",
                },
              ],
            },
            "resolve": "@srinivasulu-narayanam/medusa/notification",
          },
          "order": {
            "resolve": "@srinivasulu-narayanam/medusa/order",
          },
          "payment": {
            "resolve": "@srinivasulu-narayanam/medusa/payment",
          },
          "pricing": {
            "resolve": "@srinivasulu-narayanam/medusa/pricing",
          },
          "product": {
            "resolve": "@srinivasulu-narayanam/medusa/product",
          },
          "promotion": {
            "resolve": "@srinivasulu-narayanam/medusa/promotion",
          },
          "region": {
            "resolve": "@srinivasulu-narayanam/medusa/region",
          },
          "sales_channel": {
            "resolve": "@srinivasulu-narayanam/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@srinivasulu-narayanam/medusa/stock-location",
          },
          "store": {
            "resolve": "@srinivasulu-narayanam/medusa/store",
          },
          "tax": {
            "resolve": "@srinivasulu-narayanam/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@srinivasulu-narayanam/medusa/user",
          },
          "workflows": {
            "resolve": "@srinivasulu-narayanam/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })
})
