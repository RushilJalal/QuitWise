import AlcoholTracker from "@/components/AlcoholTracker";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AlcoholRecovery: React.FC = () => {
  return (
    <View style={styles.container}>
      <AlcoholTracker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default AlcoholRecovery;
