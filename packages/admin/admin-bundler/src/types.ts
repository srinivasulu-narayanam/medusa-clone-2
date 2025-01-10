import { AdminOptions } from "@srinivasulu-narayanam/types"

export type BundlerOptions = Required<Pick<AdminOptions, "path">> &
  Pick<AdminOptions, "vite" | "backendUrl" | "storefrontUrl"> & {
    outDir: string
    sources?: string[]
  }
