import { createDefaultsWorkflow } from "@srinivasulu-narayanam/core-flows"
import {
  IRegionModuleService,
  IStoreModuleService,
  MedusaContainer,
} from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"

export const seedStorefrontDefaults = async (
  container: MedusaContainer,
  defaultCurrency: string = "usd"
) => {
  const regionModule: IRegionModuleService = container.resolve(Modules.REGION)
  const storeModule: IStoreModuleService = container.resolve(Modules.STORE)

  // Creates the stores & default sales channel
  await createDefaultsWorkflow(container).run()

  const region = await regionModule.createRegions({
    name: "Default Region",
    currency_code: defaultCurrency,
  })

  let [store] = await storeModule.listStores({})

  store = await storeModule.updateStores(store.id, {
    default_region_id: region.id,
    supported_currencies: [
      { currency_code: region.currency_code, is_default: true },
    ],
  })

  return {
    region,
    store,
  }
}
