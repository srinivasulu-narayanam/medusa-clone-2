import { validateAndTransformQuery } from "@srinivasulu-narayanam/framework"
import {
  MiddlewareRoute,
  validateAndTransformBody,
} from "@srinivasulu-narayanam/framework/http"
import { authenticate } from "../../../utils/middlewares/authenticate-middleware"
import * as QueryConfig from "./query-config"
import {
  StoreAcceptOrderTransfer,
  StoreGetOrderParams,
  StoreGetOrdersParams,
  StoreRequestOrderTransfer,
  StoreCancelOrderTransferRequest,
  StoreDeclineOrderTransferRequest,
} from "./validators"

export const storeOrderRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/store/orders",
    middlewares: [
      authenticate("customer", ["session", "bearer"]),
      validateAndTransformQuery(
        StoreGetOrdersParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/store/orders/:id",
    middlewares: [
      validateAndTransformQuery(
        StoreGetOrderParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/store/orders/:id/transfer/request",
    middlewares: [
      authenticate("customer", ["session", "bearer"]),
      validateAndTransformBody(StoreRequestOrderTransfer),
      validateAndTransformQuery(
        StoreGetOrderParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/store/orders/:id/transfer/cancel",
    middlewares: [
      authenticate("customer", ["session", "bearer"]),
      validateAndTransformBody(StoreCancelOrderTransferRequest),
      validateAndTransformQuery(
        StoreGetOrderParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/store/orders/:id/transfer/accept",
    middlewares: [
      validateAndTransformBody(StoreAcceptOrderTransfer),
      validateAndTransformQuery(
        StoreGetOrderParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/store/orders/:id/transfer/decline",
    middlewares: [
      validateAndTransformBody(StoreDeclineOrderTransferRequest),
      validateAndTransformQuery(
        StoreGetOrderParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
