import SmokingTracker from "@/components/SmokingTracker";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SmokingCessation: React.FC = () => {
  return (
    <View style={styles.container}>
      <SmokingTracker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default SmokingCessation;
