import { IEventBusModuleService, Logger } from "@srinivasulu-narayanam/framework/types"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
  EventBus?: IEventBusModuleService
}
