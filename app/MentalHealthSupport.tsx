import ButtonLink from "@/components/ButtonLink";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MentalHealthSupport: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Welcome to Mental Health Support</Text>
      <Text style={styles.message}>
        Join our Discord server to connect with others in your community
      </Text>
      <ButtonLink
        href="https://discord.gg/hUhn2BGm"
        imageSource={require("../assets/join_community.jpg")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  message: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#14d9c5",
  },
  img: {
    borderRadius: 5,
    width: 300,
    height: 200,
  },
});

export default MentalHealthSupport;
