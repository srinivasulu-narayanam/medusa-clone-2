import {
  CommonEvents,
  moduleEventBuilderFactory,
  Modules,
  NotificationEvents,
} from "@srinivasulu-narayanam/framework/utils"

export const eventBuilders = {
  createdNotification: moduleEventBuilderFactory({
    source: Modules.NOTIFICATION,
    action: CommonEvents.CREATED,
    object: "notification",
    eventName: NotificationEvents.NOTIFICATION_CREATED,
  }),
}
