import { Logger, UpdateSalesChannelDTO } from "@srinivasulu-narayanam/framework/types"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
}

export type UpdateSalesChanneInput = UpdateSalesChannelDTO & { id: string }
