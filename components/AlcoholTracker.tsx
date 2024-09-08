import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const AlcoholTracker = () => {
  const [lastDrinkTime, setLastDrinkTime] = useState<Date | null>(null);
  const [elapsedDrinkTime, setElapsedDrinkTime] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadLastDrinkTime = async () => {
      try {
        const storedTime = await AsyncStorage.getItem("lastDrinkTime");
        if (storedTime) {
          const lastTime = new Date(storedTime);
          setLastDrinkTime(lastTime);
          setElapsedDrinkTime(calculateElapsedTime(lastTime));
          setProgress(calculateProgress(lastTime));
        }
      } catch (error) {
        console.error("Failed to load last drink time:", error);
      }
    };

    loadLastDrinkTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastDrinkTime) {
        setElapsedDrinkTime(calculateElapsedTime(lastDrinkTime));
        setProgress(calculateProgress(lastDrinkTime));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastDrinkTime]);

  const calculateElapsedTime = (startTime: Date) => {
    const now = new Date();
    const elapsed = now.getTime() - startTime.getTime();
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const calculateProgress = (startTime: Date) => {
    const now = new Date();
    const elapsed = now.getTime() - startTime.getTime();
    const total = 100000; // 24 hours in milliseconds
    return (elapsed / total) * 100;
  };

  const updateLastDrinkTime = async () => {
    const now = new Date();
    setLastDrinkTime(now);
    try {
      await AsyncStorage.setItem("lastDrinkTime", now.toISOString());
    } catch (error) {
      console.error("Failed to save last drink time:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Time since last drink:</Text>
      <AnimatedCircularProgress
        size={250}
        width={15}
        fill={progress}
        tintColor="#14d9c5"
        backgroundColor="#727272"
        style={styles.progress}
      >
        {() => <Text style={styles.time}>{elapsedDrinkTime || "N/A"}</Text>}
      </AnimatedCircularProgress>
      <TouchableOpacity style={styles.button} onPress={updateLastDrinkTime}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  progress: {
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    backgroundColor: "#14d9c5",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AlcoholTracker;
