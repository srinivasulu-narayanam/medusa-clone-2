import { MiddlewareRoute } from "@srinivasulu-narayanam/framework/http"
import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@srinivasulu-narayanam/framework"
import {
  listTransformQueryConfig,
  retrieveTransformQueryConfig,
} from "./query-config"
import {
  AdminCreateShippingProfile,
  AdminGetShippingProfileParams,
  AdminGetShippingProfilesParams,
  AdminUpdateShippingProfile,
} from "./validators"

export const adminShippingProfilesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["POST"],
    matcher: "/admin/shipping-profiles",
    middlewares: [
      validateAndTransformBody(AdminCreateShippingProfile),
      validateAndTransformQuery(
        AdminGetShippingProfilesParams,
        retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/shipping-profiles",
    middlewares: [
      validateAndTransformQuery(
        AdminGetShippingProfilesParams,
        listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/shipping-profiles/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdateShippingProfile),
      validateAndTransformQuery(
        AdminGetShippingProfileParams,
        retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/shipping-profiles/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetShippingProfileParams,
        retrieveTransformQueryConfig
      ),
    ],
  },
]
