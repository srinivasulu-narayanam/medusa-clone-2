import { createServiceZonesWorkflow } from "@srinivasulu-narayanam/core-flows"
import { MedusaRequest, MedusaResponse } from "@srinivasulu-narayanam/framework/http"
import { AdminCreateFulfillmentSetServiceZonesType } from "../../validators"
import { refetchFulfillmentSet } from "../../helpers"
import { HttpTypes } from "@srinivasulu-narayanam/framework/types"

export const POST = async (
  req: MedusaRequest<AdminCreateFulfillmentSetServiceZonesType>,
  res: MedusaResponse<HttpTypes.AdminFulfillmentSetResponse>
) => {
  const workflowInput = {
    data: [
      {
        fulfillment_set_id: req.params.id,
        name: req.validatedBody.name,
        geo_zones: req.validatedBody.geo_zones,
      },
    ],
  }

  await createServiceZonesWorkflow(req.scope).run({
    input: workflowInput,
  })

  const fulfillmentSet = await refetchFulfillmentSet(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ fulfillment_set: fulfillmentSet })
}
