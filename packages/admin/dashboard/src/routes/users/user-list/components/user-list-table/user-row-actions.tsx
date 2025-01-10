import { PencilSquare } from "@srinivasulu-narayanam/icons"
import { UserDTO } from "@srinivasulu-narayanam/types"
import { useTranslation } from "react-i18next"
import { ActionMenu } from "../../../../../components/common/action-menu"

export const UserRowActions = ({ user }: { user: UserDTO }) => {
  const { t } = useTranslation()

  return (
    <ActionMenu
      groups={[
        {
          actions: [
            {
              icon: <PencilSquare />,
              label: t("actions.edit"),
              to: `${user.id}/edit`,
            },
          ],
        },
      ]}
    />
  )
}
