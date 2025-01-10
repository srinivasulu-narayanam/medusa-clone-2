import { MiddlewareRoute } from "@srinivasulu-narayanam/framework/http"
import { validateAndTransformQuery } from "@srinivasulu-narayanam/framework"
import * as QueryConfig from "./query-config"
import { StoreGetCurrenciesParams, StoreGetCurrencyParams } from "./validators"

export const storeCurrencyRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/store/currencies",
    middlewares: [
      validateAndTransformQuery(
        StoreGetCurrenciesParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/store/currencies/:code",
    middlewares: [
      validateAndTransformQuery(
        StoreGetCurrencyParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
