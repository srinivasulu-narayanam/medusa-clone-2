import { ContainerLike } from "@srinivasulu-narayanam/types"

export function createContainerLike(obj): ContainerLike {
  return {
    resolve(key: string) {
      return obj[key]
    },
  }
}
