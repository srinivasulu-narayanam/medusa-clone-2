import { INotificationModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export type SendNotificationsStepInput = {
  to: string
  channel: string
  template: string
  data?: Record<string, unknown> | null
  trigger_type?: string | null
  resource_id?: string | null
  resource_type?: string | null
  receiver_id?: string | null
  original_notification_id?: string | null
  idempotency_key?: string | null
}[]

export const sendNotificationsStepId = "send-notifications"
/**
 * This step sends one or more notifications.
 */
export const sendNotificationsStep = createStep(
  sendNotificationsStepId,
  async (data: SendNotificationsStepInput, { container }) => {
    const service = container.resolve<INotificationModuleService>(
      Modules.NOTIFICATION
    )
    const created = await service.createNotifications(data)
    return new StepResponse(
      created,
      created.map((notification) => notification.id)
    )
  }
  // Most of the notifications are irreversible, so we can't compensate notifications reliably
)
