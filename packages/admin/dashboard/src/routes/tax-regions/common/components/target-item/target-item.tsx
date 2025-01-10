import { XMarkMini } from "@srinivasulu-narayanam/icons"
import { IconButton, Text } from "@srinivasulu-narayanam/ui"

type TargetItemProps = {
  index: number
  onRemove: (index: number) => void
  label: string
}

export const TargetItem = ({ index, label, onRemove }: TargetItemProps) => {
  return (
    <div className="bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5">
      <Text size="small" leading="compact">
        {label}
      </Text>
      <IconButton
        size="small"
        variant="transparent"
        type="button"
        onClick={() => onRemove(index)}
      >
        <XMarkMini />
      </IconButton>
    </div>
  )
}
