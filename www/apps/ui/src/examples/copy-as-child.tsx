import { PlusMini } from "@srinivasulu-narayanam/icons"
import { Copy, IconButton, Text } from "@srinivasulu-narayanam/ui"

export default function CopyAsChild() {
  return (
    <div className="flex items-center gap-x-2">
      <Text>Copy command</Text>
      <Copy content="yarn add @srinivasulu-narayanam/ui" asChild>
        <IconButton>
          <PlusMini />
        </IconButton>
      </Copy>
    </div>
  )
}
