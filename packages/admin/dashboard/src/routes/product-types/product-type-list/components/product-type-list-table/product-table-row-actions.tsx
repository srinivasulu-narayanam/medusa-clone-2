import { PencilSquare, Trash } from "@srinivasulu-narayanam/icons"
import { HttpTypes } from "@srinivasulu-narayanam/types"
import { useTranslation } from "react-i18next"
import { ActionMenu } from "../../../../../components/common/action-menu"
import { useDeleteProductTypeAction } from "../../../common/hooks/use-delete-product-type-action"

type ProductTypeRowActionsProps = {
  productType: HttpTypes.AdminProductType
}

export const ProductTypeRowActions = ({
  productType,
}: ProductTypeRowActionsProps) => {
  const { t } = useTranslation()
  const handleDelete = useDeleteProductTypeAction(productType.id)

  return (
    <ActionMenu
      groups={[
        {
          actions: [
            {
              label: t("actions.edit"),
              icon: <PencilSquare />,
              to: `/settings/product-types/${productType.id}/edit`,
            },
          ],
        },
        {
          actions: [
            {
              label: t("actions.delete"),
              icon: <Trash />,
              onClick: handleDelete,
            },
          ],
        },
      ]}
    />
  )
}
