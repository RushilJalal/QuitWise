import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import useStore from "../useStore";
import ButtonLink from "@/components/ButtonLink";

const userProfile = {
  name: "Rushil Jalal",
  email: "rushiljalal@gmail.com",
  profilePicture: require("../assets/avatars/whiteman.png"),
  joinDate: "Joined in 2024",
  bio: "Passionate about epigenetics and helping others recover from addiction.",
  location: "New York, USA",
  interests: ["Epigenetics", "Health", "Wellness", "Recovery"],
};

export default function UserProfile() {
  const { longestStreak, longestSmokeStreak } = useStore();

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
          <Text style={styles.streakText}>{longestStreak} days</Text>
        </View>
        <View style={styles.overview}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/cigarette.png")}
          />
          <Text style={styles.overviewText}>Longest streak:</Text>
          <Text style={styles.streakText}>{longestSmokeStreak} days</Text>
        </View>
      </View>
      <ButtonLink
        href=""
        imageSource={require("../assets/daily consumption.png")}
        style={styles.profileButtons}
      />
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
});
