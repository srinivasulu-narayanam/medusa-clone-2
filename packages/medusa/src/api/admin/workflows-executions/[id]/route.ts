import { HttpTypes } from "@srinivasulu-narayanam/framework/types"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"

import { AdminGetWorkflowExecutionDetailsParamsType } from "../validators"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@srinivasulu-narayanam/framework/utils"

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetWorkflowExecutionDetailsParamsType>,
  res: MedusaResponse<HttpTypes.AdminWorkflowExecutionResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const variables = { id: req.params.id }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "workflow_execution",
    variables,
    fields: req.queryConfig.fields,
  })

  const [workflowExecution] = await remoteQuery(queryObject)
  res.status(200).json({ workflow_execution: workflowExecution })
}
