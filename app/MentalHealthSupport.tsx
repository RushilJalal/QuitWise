import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MentalHealthSupport: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mental Health Support</Text>
      <Text style={styles.description}>
        Welcome to our mental health support app! We are here to provide you
        with the resources and tools you need to take care of your mental
        well-being.
      </Text>
      {/* Add more components and functionality here */}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
  },
});

export default MentalHealthSupport;
