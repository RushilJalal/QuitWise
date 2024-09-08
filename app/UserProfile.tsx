import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: "https://via.placeholder.com/150",
  bio: "Passionate about epigenetics and helping others recover from addiction.",
  location: "New York, USA",
  interests: ["Epigenetics", "Health", "Wellness", "Recovery"],
};

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: userProfile.profilePicture }}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>{userProfile.name}</Text>
      <Text style={styles.email}>{userProfile.email}</Text>
      <Text style={styles.bio}>{userProfile.bio}</Text>
      <Text style={styles.location}>{userProfile.location}</Text>
      <Text style={styles.interestsTitle}>Interests:</Text>
      <View style={styles.interestsContainer}>
        {userProfile.interests.map((interest, index) => (
          <Text key={index} style={styles.interest}>
            {interest}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  profilePicture: {
    width: 150,
    height: 150,
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
  bio: {
    fontSize: 16,
    textAlign: "center",
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
});
