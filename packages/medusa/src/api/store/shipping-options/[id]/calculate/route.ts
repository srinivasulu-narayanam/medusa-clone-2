import { HttpTypes } from "@srinivasulu-narayanam/framework/types"
import { MedusaRequest, MedusaResponse } from "@srinivasulu-narayanam/framework/http"
import { calculateShippingOptionsPricesWorkflow } from "@srinivasulu-narayanam/core-flows"
import { ContainerRegistrationKeys } from "@srinivasulu-narayanam/framework/utils"

export const POST = async (
  req: MedusaRequest<HttpTypes.StoreCalculateShippingOptionPrice>,
  res: MedusaResponse<HttpTypes.StoreShippingOptionResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { result } = await calculateShippingOptionsPricesWorkflow(
    req.scope
  ).run({
    input: {
      shipping_options: [{ id: req.params.id, data: req.validatedBody.data }],
      cart_id: req.validatedBody.cart_id,
    },
  })

  const { data } = await query.graph({
    entity: "shipping_option",
    fields: req.queryConfig.fields,
    filters: { id: req.params.id },
  })

  const shippingOption = data[0]
  const priceData = result[0]

  shippingOption.calculated_price = priceData

  // ensure same shape as flat rate shipping options
  shippingOption.amount = priceData.calculated_amount
  shippingOption.is_tax_inclusive = priceData.is_calculated_price_tax_inclusive

  res.status(200).json({ shipping_option: shippingOption })
}
