import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Function to schedule hourly notifications
export async function scheduleHourlyNotifications() {
  // Cancel all existing notifications
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Schedule a new notification every hour
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hourly Reminder",
      body: "This is your hourly notification!",
    },
    trigger: {
      seconds: 200, // 1 hour in seconds
      repeats: true,
    },
  });
}
