import { MedusaContainer } from "@srinivasulu-narayanam/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"

export const refetchOrder = async (
  orderId: string,
  scope: MedusaContainer,
  fields: string[]
) => {
  const remoteQuery = scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order",
    variables: {
      filters: { id: orderId },
    },
    fields: fields,
  })

  const orders = await remoteQuery(queryObject)
  return orders[0]
}
