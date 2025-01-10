import { CreateTaxRateDTO, TaxRateDTO } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { createTaxRatesStep } from "../steps"

export const createTaxRatesWorkflowId = "create-tax-rates"
/**
 * This workflow creates one or more tax rates.
 */
export const createTaxRatesWorkflow = createWorkflow(
  createTaxRatesWorkflowId,
  (input: WorkflowData<CreateTaxRateDTO[]>): WorkflowResponse<TaxRateDTO[]> => {
    return new WorkflowResponse(createTaxRatesStep(input))
  }
)
