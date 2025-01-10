import { CreateTaxRegionDTO, TaxRegionDTO } from "@srinivasulu-narayanam/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"
import { createTaxRegionsStep } from "../steps"

export const createTaxRegionsWorkflowId = "create-tax-regions"
/**
 * This workflow creates one or more tax regions.
 */
export const createTaxRegionsWorkflow = createWorkflow(
  createTaxRegionsWorkflowId,
  (
    input: WorkflowData<CreateTaxRegionDTO[]>
  ): WorkflowResponse<TaxRegionDTO[]> => {
    return new WorkflowResponse(createTaxRegionsStep(input))
  }
)
