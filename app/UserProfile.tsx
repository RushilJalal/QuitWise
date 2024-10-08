import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import useStore from "../useStore";
import ButtonLink from "@/components/ButtonLink";
import Modal from "react-native-modal";

const userProfile = {
  name: "Rushil Jalal",
  email: "rushiljalal@gmail.com",
  profilePicture: require("../assets/avatars/whiteman.png"),
  joinDate: "Joined in 2024",
};

export default function UserProfile() {
  const { longestStreak, longestSmokeStreak } = useStore();
  const [isModalVisible, setModalVisible] = useState(false);
  const [dailyConsumption, setDailyConsumption] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleInputChange = (value: string) => {
    setDailyConsumption(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={userProfile.profilePicture}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>{userProfile.name}</Text>
      <Text style={styles.email}>{userProfile.email}</Text>
      <Text style={styles.date}>{userProfile.joinDate}</Text>
      <Text style={styles.title}>Overview:</Text>
      <View style={styles.overviewContainer}>
        <View style={styles.overview}>
          <Image
            style={{ width: 20, height: 28 }}
            source={require("../assets/alcohol top right.png")}
          />
          <Text style={styles.overviewText}>Longest streak:</Text>
          <Text style={styles.streakText}>
            {longestStreak} {longestStreak === 1 ? "Day" : "Days"}
          </Text>
        </View>
        <View style={styles.overview}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/cigarette.png")}
          />
          <Text style={styles.overviewText}>Longest streak:</Text>
          <Text style={styles.streakText}>
            {longestSmokeStreak} {longestSmokeStreak === 1 ? "Day" : "Days"}
          </Text>
        </View>
      </View>
      <ButtonLink
        href="/UserProfile"
        imageSource={require("../assets/daily consumption.png")}
        style={styles.profileButtons}
        onPress={toggleModal}
      />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Daily Consumption</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={dailyConsumption}
            onChangeText={handleInputChange}
            placeholder="Enter a number"
          />
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ButtonLink
        href=""
        imageSource={require("../assets/change username.png")}
        style={styles.profileButtons}
      />
      <ButtonLink
        href=""
        imageSource={require("../assets/change password.png")}
        style={styles.profileButtons}
      />
      <ButtonLink
        href=""
        imageSource={require("../assets/sign out.png")}
        style={styles.profileButtons}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    color: "black",
    marginBottom: 16,
  },
  location: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
  },
  interestsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  interest: {
    fontSize: 16,
    backgroundColor: "#e1e4e7",
    padding: 8,
    borderRadius: 16,
    margin: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  overviewContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  overview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 16,
    gap: 8,
    fontSize: 30,
  },
  profileButtons: {
    width: "100%",
    height: 100,
  },
  overviewText: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  streakText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
