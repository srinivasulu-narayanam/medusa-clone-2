import { MiddlewareRoute } from "@srinivasulu-narayanam/framework/http"
import { validateAndTransformQuery } from "@srinivasulu-narayanam/framework"
import { applyCategoryFilters } from "./helpers"
import * as QueryConfig from "./query-config"
import {
  StoreProductCategoriesParams,
  StoreProductCategoryParams,
} from "./validators"

export const storeProductCategoryRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/store/product-categories",
    middlewares: [
      validateAndTransformQuery(
        StoreProductCategoriesParams,
        QueryConfig.listProductCategoryConfig
      ),
      applyCategoryFilters,
    ],
  },
  {
    method: ["GET"],
    matcher: "/store/product-categories/:id",
    middlewares: [
      validateAndTransformQuery(
        StoreProductCategoryParams,
        QueryConfig.retrieveProductCategoryConfig
      ),
      applyCategoryFilters,
    ],
  },
]
