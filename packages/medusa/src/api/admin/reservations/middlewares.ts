import * as QueryConfig from "./query-config"

import { MiddlewareRoute } from "@srinivasulu-narayanam/framework/http"
import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@srinivasulu-narayanam/framework"
import {
  AdminCreateReservation,
  AdminGetReservationParams,
  AdminGetReservationsParams,
  AdminUpdateReservation,
} from "./validators"

export const adminReservationRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/reservations",
    middlewares: [
      validateAndTransformQuery(
        AdminGetReservationsParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/reservations/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetReservationParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/reservations",
    middlewares: [
      validateAndTransformBody(AdminCreateReservation),
      validateAndTransformQuery(
        AdminGetReservationParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/reservations/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdateReservation),
      validateAndTransformQuery(
        AdminGetReservationParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
