import { MiddlewareRoute } from "@srinivasulu-narayanam/framework/http"
import { validateAndTransformQuery } from "@srinivasulu-narayanam/framework"
import * as QueryConfig from "./query-config"
import { AdminGetProductVariantsParams } from "./validators"

export const adminProductVariantRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/product-variants",
    middlewares: [
      validateAndTransformQuery(
        AdminGetProductVariantsParams,
        QueryConfig.listProductVariantQueryConfig
      ),
    ],
  },
]
