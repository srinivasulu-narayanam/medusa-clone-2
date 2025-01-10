import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@srinivasulu-narayanam/framework/http"

import {
  importProductsWorkflowId,
  waitConfirmationProductImportStepId,
} from "@srinivasulu-narayanam/core-flows"
import { IWorkflowEngineService } from "@srinivasulu-narayanam/framework/types"
import { Modules, TransactionHandlerType } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const workflowEngineService: IWorkflowEngineService = req.scope.resolve(
    Modules.WORKFLOW_ENGINE
  )
  const transactionId = req.params.transaction_id

  await workflowEngineService.setStepSuccess({
    idempotencyKey: {
      action: TransactionHandlerType.INVOKE,
      transactionId,
      stepId: waitConfirmationProductImportStepId,
      workflowId: importProductsWorkflowId,
    },
    stepResponse: new StepResponse(true),
  })

  res.status(202).json({})
}
