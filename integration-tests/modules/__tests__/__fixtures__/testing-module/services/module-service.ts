import { IModuleService } from "@srinivasulu-narayanam/types"
import { MedusaContext } from "@srinivasulu-narayanam/utils"

// @ts-expect-error
export class ModuleService implements IModuleService {
  public property = "value"
  public dynProperty

  constructor() {
    this.dynProperty = {
      key: "key value",
    }
  }
  async methodName(input, @MedusaContext() context) {
    return input + " called"
  }
}
