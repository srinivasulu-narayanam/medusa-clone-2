import { MedusaModule } from "@srinivasulu-narayanam/framework/modules-sdk"
import { IEventBusService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"

export const initialize = async (): Promise<IEventBusService> => {
  const serviceKey = Modules.EVENT_BUS
  const loaded = await MedusaModule.bootstrap<IEventBusService>({
    moduleKey: serviceKey,
    defaultPath: "@srinivasulu-narayanam/event-bus-local",
  })

  return loaded[serviceKey]
}
