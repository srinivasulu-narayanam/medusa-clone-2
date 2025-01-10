import { join } from "path"
import { FileSystem } from "../../common"
import { generateContainerTypes } from "../modules-to-container-types"

const fileSystem = new FileSystem(join(__dirname, "./tmp"))

afterEach(async () => {
  await fileSystem.cleanup()
})

describe("generateContainerTypes", function () {
  it("should create file with types for provided modules", async function () {
    await generateContainerTypes(
      {
        cache: {
          __definition: {
            key: "cache",
            label: "Cache",
            defaultPackage: "@srinivasulu-narayanam/foo",
            resolvePath: "@srinivasulu-narayanam/foo",
            defaultModuleDeclaration: {
              scope: "internal",
            },
          },
          __joinerConfig: {},
        },
      },
      {
        outputDir: fileSystem.basePath,
        interfaceName: "ModulesImplementations",
      }
    )

    expect(await fileSystem.exists("modules-bindings.d.ts")).toBeTruthy()
    expect(await fileSystem.contents("modules-bindings.d.ts"))
      .toMatchInlineSnapshot(`
      "import type Cache from '@srinivasulu-narayanam/foo'

      declare module '@srinivasulu-narayanam/framework/types' {
        interface ModulesImplementations {
          cache: InstanceType<(typeof Cache)['service']>
        }
      }"
    `)
  })

  it("should normalize module path pointing to a relative file", async function () {
    await generateContainerTypes(
      {
        cache: {
          __definition: {
            key: "cache",
            label: "Cache",
            defaultPackage: "./foo/bar",
            resolvePath: "./foo/bar",
            defaultModuleDeclaration: {
              scope: "internal",
            },
          },
          __joinerConfig: {},
        },
      },
      {
        outputDir: fileSystem.basePath,
        interfaceName: "ModulesImplementations",
      }
    )

    expect(await fileSystem.exists("modules-bindings.d.ts")).toBeTruthy()
    expect(await fileSystem.contents("modules-bindings.d.ts"))
      .toMatchInlineSnapshot(`
      "import type Cache from '../../foo/bar'

      declare module '@srinivasulu-narayanam/framework/types' {
        interface ModulesImplementations {
          cache: InstanceType<(typeof Cache)['service']>
        }
      }"
    `)
  })
})
