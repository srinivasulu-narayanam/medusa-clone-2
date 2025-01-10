import { Photo } from "@srinivasulu-narayanam/icons"
import { clx } from "@srinivasulu-narayanam/ui"

type ThumbnailProps = {
  src?: string | null
  alt?: string
  size?: "small" | "base"
}

export const Thumbnail = ({ src, alt, size = "base" }: ThumbnailProps) => {
  return (
    <div
      className={clx(
        "bg-ui-bg-component flex items-center justify-center overflow-hidden rounded-[4px]",
        {
          "h-8 w-6": size === "base",
          "h-5 w-4": size === "small",
        }
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <Photo className="text-ui-fg-subtle" />
      )}
    </div>
  )
}
