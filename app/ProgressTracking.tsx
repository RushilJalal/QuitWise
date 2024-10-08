import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProgressTracking: React.FC = () => {
  const [points, setPoints] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [factsRead, setFactsRead] = useState(0); // Assuming factsRead is also stored in AsyncStorage

  useEffect(() => {
    const loadStoredData = async () => {
      const storedPoints = await AsyncStorage.getItem("points");
      const storedQuestionsAnswered = await AsyncStorage.getItem(
        "questionsAnswered"
      );
      const storedFactsRead = await AsyncStorage.getItem("factsRead"); // Assuming factsRead is also stored in AsyncStorage
      if (storedPoints !== null) setPoints(parseInt(storedPoints, 10));
      if (storedQuestionsAnswered !== null)
        setQuestionsAnswered(parseInt(storedQuestionsAnswered, 10));
      if (storedFactsRead !== null) setFactsRead(parseInt(storedFactsRead, 10)); // Assuming factsRead is also stored in AsyncStorage
    };
    loadStoredData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Total Points: {points}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Correct Answers: {questionsAnswered}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Facts Read: {factsRead}</Text>
      </View>
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
  box: {
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 8,
  },
  title: {
    display: "flex",
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#14d9c5",
    borderWidth: 5,
    borderRadius: 15,
    padding: 30,
    marginBottom: 12, // Add margin to create a gap between the question box and the line beneath it
  },
});

export default ProgressTracking;
