import { InformationCircleSolid } from "@srinivasulu-narayanam/icons"
import { Tooltip } from "@srinivasulu-narayanam/ui"

export default function TooltipDemo() {
  return (
    <Tooltip content="The quick brown fox jumps over the lazy dog.">
      <InformationCircleSolid />
    </Tooltip>
  )
}
