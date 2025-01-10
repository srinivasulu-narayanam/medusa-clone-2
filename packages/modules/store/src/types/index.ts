import {
  IEventBusModuleService,
  Logger,
  StoreTypes,
} from "@srinivasulu-narayanam/framework/types"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
  EventBus?: IEventBusModuleService
}

export type UpdateStoreInput = StoreTypes.UpdateStoreDTO & { id: string }
