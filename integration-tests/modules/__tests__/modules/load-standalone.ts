import { medusaIntegrationTestRunner } from "@srinivasulu-narayanam/test-utils"
import { MedusaApp } from "@srinivasulu-narayanam/modules-sdk"
import { IProductModuleService } from "@srinivasulu-narayanam/types"
import { Modules } from "@srinivasulu-narayanam/utils"

jest.setTimeout(30000)

medusaIntegrationTestRunner({
  testSuite: ({ dbConfig: { clientUrl } }) => {
    describe("Standalone Modules", () => {
      beforeAll(async () => {
        process.env.DATABASE_URL = clientUrl
      })

      afterAll(async () => {
        process.env.DATABASE_URL = undefined
      })

      it("Should migrate database and initialize Product module using connection string from environment variable ", async function () {
        const { modules, runMigrations } = await MedusaApp({
          modulesConfig: {
            [Modules.PRODUCT]: true,
          },
        })

        await runMigrations()

        const product = modules[
          Modules.PRODUCT
        ] as unknown as IProductModuleService

        const productList = await product.listProducts()

        expect(productList).toEqual(expect.arrayContaining([]))
      })
    })
  },
})
