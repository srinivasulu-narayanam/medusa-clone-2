import { PencilSquare, Trash } from "@srinivasulu-narayanam/icons"
import { HttpTypes } from "@srinivasulu-narayanam/types"
import { Container, Heading } from "@srinivasulu-narayanam/ui"
import { useTranslation } from "react-i18next"
import { ActionMenu } from "../../../../../components/common/action-menu"
import { useDeleteProductTypeAction } from "../../../common/hooks/use-delete-product-type-action"

type ProductTypeGeneralSectionProps = {
  productType: HttpTypes.AdminProductType
}

export const ProductTypeGeneralSection = ({
  productType,
}: ProductTypeGeneralSectionProps) => {
  const { t } = useTranslation()
  const handleDelete = useDeleteProductTypeAction(productType.id)

  return (
    <Container className="flex items-center justify-between">
      <Heading>{productType.value}</Heading>
      <ActionMenu
        groups={[
          {
            actions: [
              {
                label: t("actions.edit"),
                icon: <PencilSquare />,
                to: "edit",
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
    </Container>
  )
}
