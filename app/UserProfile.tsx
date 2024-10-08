import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import useStore from "../useStore";
import ButtonLink from "@/components/ButtonLink";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userProfile = {
  name: "Rushil Jalal",
  email: "rushiljalal@gmail.com",
  profilePicture: require("../assets/avatars/whiteman.png"),
  joinDate: "Joined in 2024",
};

const availableImages = [
  require("../assets/avatars/whiteman.png"),
  require("../assets/avatars/blackman.png"),
  require("../assets/avatars/whiteturban.png"),
  require("../assets/avatars/blackturban.png"),
  require("../assets/avatars/blackbraid1.png"),
  require("../assets/avatars/blackbald.png"),
  require("../assets/avatars/blackbraid.png"),
  require("../assets/avatars/shortwhitekurta.png"),
  require("../assets/avatars/whitewoman.png"),
  require("../assets/avatars/blackbraidsaree.png"),
  require("../assets/avatars/blackbraidvest.png"),
  require("../assets/avatars/whitebald.png"),
  require("../assets/avatars/blackwomansaree.png"),
  require("../assets/avatars/blackwomanvest.png"),
  require("../assets/avatars/whitebraid.png"),
  require("../assets/avatars/whitebraidkurta.png"),
];

export default function UserProfile() {
  //import username from store
  const { username, setUsername } = useStore();
  const { longestStreak, longestSmokeStreak } = useStore();
  const [isDailyConsumptionModalVisible, setDailyConsumptionModalVisible] =
    useState(false);
  const [isUsernameModalVisible, setUsernameModalVisible] = useState(false);
  const [isProfilePictureModalVisible, setProfilePictureModalVisible] =
    useState(false);
  const [dailyConsumption, setDailyConsumption] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    userProfile.profilePicture
  );

  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(username);

  useEffect(() => {
    const loadStoredData = async () => {
      let storedName = await AsyncStorage.getItem("name");
      if (storedName !== null) setNewName(storedName);
      else {
        setNewName(userProfile.name);
      }
    };
    loadStoredData();
  }, []);

  const handleNameSubmit = async () => {
    await AsyncStorage.setItem("name", newName);
    setIsEditingName(false);
  };

  const toggleDailyConsumptionModal = () => {
    setDailyConsumptionModalVisible(!isDailyConsumptionModalVisible);
  };

  const toggleUsernameModal = () => {
    setUsernameModalVisible(!isUsernameModalVisible);
  };

  const toggleProfilePictureModal = () => {
    setProfilePictureModalVisible(!isProfilePictureModalVisible);
  };

  const handleDailyConsumptionChange = (value: string) => {
    setDailyConsumption(value);
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handleProfilePictureChange = (image: any) => {
    setProfilePicture(image);
    setProfilePictureModalVisible(false);
  };

  const saveUsername = () => {
    // Save the new username to the user profile or backend
    userProfile.name = username;
    toggleUsernameModal();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={profilePicture} style={styles.profilePicture} />
      <TouchableOpacity onPress={toggleProfilePictureModal}>
        <Text style={styles.changepfp}>Change Profile Picture</Text>
      </TouchableOpacity>
      {isEditingName ? (
        <TextInput
          style={styles.nameInput}
          value={newName}
          onChangeText={setNewName}
          onSubmitEditing={handleNameSubmit}
          onBlur={handleNameSubmit}
        />
      ) : (
        <TouchableOpacity onPress={() => setIsEditingName(true)}>
          <Text style={styles.name}>{newName}</Text>
        </TouchableOpacity>
      )}
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
        onPress={toggleDailyConsumptionModal}
      />
      <Modal isVisible={isDailyConsumptionModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Daily Consumption</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={dailyConsumption}
            onChangeText={handleDailyConsumptionChange}
            placeholder="Enter a number"
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={toggleDailyConsumptionModal}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ButtonLink
        href=""
        imageSource={require("../assets/change username.png")}
        style={styles.profileButtons}
        onPress={toggleUsernameModal}
      />
      <Modal isVisible={isUsernameModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Change Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={handleUsernameChange}
            placeholder="Enter new username"
          />
          <TouchableOpacity style={styles.saveButton} onPress={saveUsername}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={toggleUsernameModal}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
      <Modal isVisible={isProfilePictureModalVisible}>
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.imageList}>
            {availableImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleProfilePictureChange(image)}
              >
                <Image source={image} style={styles.imageOption} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Button title="Close" onPress={toggleProfilePictureModal} />
        </View>
      </Modal>
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
  saveButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
  imageList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageOption: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 8,
  },
  changepfp: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 16,
  },
  nameInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
});
