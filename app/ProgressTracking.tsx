import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressTracking: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
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

export default ProgressTracking;
