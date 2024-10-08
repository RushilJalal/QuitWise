import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Switch,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Text, View } from "@/components/Themed";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import { scheduleHourlyNotifications } from "@/components/Notifications";
import { cancelAllScheduledNotificationsAsync } from "expo-notifications";

const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [vibrationEnabled, setVibrationEnabled] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(false);
  const [dailyInfo, setDailyInfo] = useState(false);

  useEffect(() => {
    if (notificationsEnabled) {
      scheduleHourlyNotifications();
    } else {
      cancelAllScheduledNotificationsAsync();
    }
  }, [notificationsEnabled]);

  const handleContactUs = () => {
    const email = "rushiljalal@gmail.com";
    const subject = "Contact Us";
    const body = "Hello, I would like to get in touch with you regarding...";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.canOpenURL(mailtoUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(mailtoUrl);
        } else {
          Alert.alert("Error", "Unable to open email client.");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const handleFeedback = () => {
    Alert.alert("Feedback", "Thank you for your feedback!");
  };

  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => navigation.navigate("UserProfile" as never)}
        activeOpacity={1}
      >
        <Text style={styles.label}>Profile</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => setNotificationsEnabled(!notificationsEnabled)}
        activeOpacity={1}
      >
        <Text style={styles.label}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => setSoundEnabled(!soundEnabled)}
        activeOpacity={1}
      >
        <Text style={styles.label}>Sound</Text>
        <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => setVibrationEnabled(!vibrationEnabled)}
        activeOpacity={1}
      >
        <Text style={styles.label}>Vibration</Text>
        <Switch value={vibrationEnabled} onValueChange={setVibrationEnabled} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => setDailyLimit(!dailyLimit)}
        activeOpacity={1}
      >
        <Text style={styles.label}>Daily Limit</Text>
        <Switch value={dailyLimit} onValueChange={setDailyLimit} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => setDailyInfo(!dailyInfo)}
        activeOpacity={1}
      >
        <Text style={styles.label}>Daily Info</Text>
        <Switch value={dailyInfo} onValueChange={setDailyInfo} />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <Button title="Contact Us" onPress={handleContactUs} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Feedback" onPress={handleFeedback} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    height: 60,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    color: "#3d3d3d",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SettingsScreen;
