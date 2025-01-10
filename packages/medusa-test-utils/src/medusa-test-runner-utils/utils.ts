import { isObject } from "@srinivasulu-narayanam/framework/utils"

export function applyEnvVarsToProcess(env?: Record<any, any>) {
  if (isObject(env)) {
    Object.entries(env).forEach(([k, v]) => (process.env[k] = v))
  }
}
