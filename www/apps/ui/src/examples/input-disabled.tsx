import { Input } from "@srinivasulu-narayanam/ui"

export default function InputDisabled() {
  return (
    <div className="w-[250px]">
      <Input placeholder="Disabled" id="disabled-input" disabled />
    </div>
  )
}
