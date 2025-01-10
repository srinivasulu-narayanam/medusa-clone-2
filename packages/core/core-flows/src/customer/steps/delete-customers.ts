import { ICustomerModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { createStep, StepResponse } from "@srinivasulu-narayanam/framework/workflows-sdk"

export const deleteCustomersStepId = "delete-customers"
/**
 * This step deletes one or more customers.
 */
export const deleteCustomersStep = createStep(
  deleteCustomersStepId,
  async (ids: string[], { container }) => {
    const service = container.resolve<ICustomerModuleService>(Modules.CUSTOMER)

    await service.softDeleteCustomers(ids)

    return new StepResponse(void 0, ids)
  },
  async (prevCustomerIds, { container }) => {
    if (!prevCustomerIds?.length) {
      return
    }

    const service = container.resolve<ICustomerModuleService>(Modules.CUSTOMER)

    await service.restoreCustomers(prevCustomerIds)
  }
)
