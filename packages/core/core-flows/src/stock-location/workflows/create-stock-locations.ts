import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@srinivasulu-narayanam/framework/workflows-sdk"

import { CreateStockLocationInput } from "@srinivasulu-narayanam/framework/types"
import { createStockLocations } from "../steps"

export interface CreateStockLocationsWorkflowInput {
  locations: CreateStockLocationInput[]
}

export const createStockLocationsWorkflowId = "create-stock-locations-workflow"
/**
 * This workflow creates one or more stock locations.
 */
export const createStockLocationsWorkflow = createWorkflow(
  createStockLocationsWorkflowId,
  (input: WorkflowData<CreateStockLocationsWorkflowInput>) => {
    return new WorkflowResponse(createStockLocations(input.locations))
  }
)
