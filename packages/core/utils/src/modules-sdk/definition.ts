export const Modules = {
  AUTH: "auth",
  CACHE: "cache",
  CART: "cart",
  CUSTOMER: "customer",
  EVENT_BUS: "event_bus",
  INVENTORY: "inventory",
  LINK: "link_modules",
  PAYMENT: "payment",
  PRICING: "pricing",
  PRODUCT: "product",
  PROMOTION: "promotion",
  SALES_CHANNEL: "sales_channel",
  TAX: "tax",
  FULFILLMENT: "fulfillment",
  STOCK_LOCATION: "stock_location",
  USER: "user",
  WORKFLOW_ENGINE: "workflows",
  REGION: "region",
  ORDER: "order",
  API_KEY: "api_key",
  STORE: "store",
  CURRENCY: "currency",
  FILE: "file",
  NOTIFICATION: "notification",
  INDEX: "index",
  LOCKING: "locking",
} as const

export const MODULE_PACKAGE_NAMES = {
  [Modules.AUTH]: "@srinivasulu-narayanam/medusa/auth",
  [Modules.CACHE]: "@srinivasulu-narayanam/medusa/cache-inmemory",
  [Modules.CART]: "@srinivasulu-narayanam/medusa/cart",
  [Modules.CUSTOMER]: "@srinivasulu-narayanam/medusa/customer",
  [Modules.EVENT_BUS]: "@srinivasulu-narayanam/medusa/event-bus-local",
  [Modules.INVENTORY]: "@srinivasulu-narayanam/medusa/inventory",
  [Modules.LINK]: "@srinivasulu-narayanam/medusa/link-modules",
  [Modules.PAYMENT]: "@srinivasulu-narayanam/medusa/payment",
  [Modules.PRICING]: "@srinivasulu-narayanam/medusa/pricing",
  [Modules.PRODUCT]: "@srinivasulu-narayanam/medusa/product",
  [Modules.PROMOTION]: "@srinivasulu-narayanam/medusa/promotion",
  [Modules.SALES_CHANNEL]: "@srinivasulu-narayanam/medusa/sales-channel",
  [Modules.FULFILLMENT]: "@srinivasulu-narayanam/medusa/fulfillment",
  [Modules.STOCK_LOCATION]: "@srinivasulu-narayanam/medusa/stock-location",
  [Modules.TAX]: "@srinivasulu-narayanam/medusa/tax",
  [Modules.USER]: "@srinivasulu-narayanam/medusa/user",
  [Modules.WORKFLOW_ENGINE]: "@srinivasulu-narayanam/medusa/workflow-engine-inmemory",
  [Modules.REGION]: "@srinivasulu-narayanam/medusa/region",
  [Modules.ORDER]: "@srinivasulu-narayanam/medusa/order",
  [Modules.API_KEY]: "@srinivasulu-narayanam/medusa/api-key",
  [Modules.STORE]: "@srinivasulu-narayanam/medusa/store",
  [Modules.CURRENCY]: "@srinivasulu-narayanam/medusa/currency",
  [Modules.FILE]: "@srinivasulu-narayanam/medusa/file",
  [Modules.NOTIFICATION]: "@srinivasulu-narayanam/medusa/notification",
  [Modules.INDEX]: "@srinivasulu-narayanam/medusa/index-module",
  [Modules.LOCKING]: "@srinivasulu-narayanam/medusa/locking",
}

export const REVERSED_MODULE_PACKAGE_NAMES = Object.entries(
  MODULE_PACKAGE_NAMES
).reduce((acc, [key, value]) => {
  acc[value] = key
  return acc
}, {})

// TODO: temporary fix until the event bus, cache and workflow engine are migrated to use providers and therefore only a single resolution will be good
REVERSED_MODULE_PACKAGE_NAMES["@srinivasulu-narayanam/medusa/event-bus-redis"] =
  Modules.EVENT_BUS
REVERSED_MODULE_PACKAGE_NAMES["@srinivasulu-narayanam/medusa/cache-redis"] = Modules.CACHE
REVERSED_MODULE_PACKAGE_NAMES["@srinivasulu-narayanam/medusa/workflow-engine-redis"] =
  Modules.WORKFLOW_ENGINE

/**
 * Making modules be referenced as a type as well.
 */
export type Modules = (typeof Modules)[keyof typeof Modules]
export const ModuleRegistrationName = Modules
