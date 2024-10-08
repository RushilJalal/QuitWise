import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Svg, { Circle } from "react-native-svg";
import useStore from "../useStore";
let days: number;
const AlcoholTracker = () => {
  const {
    lastDrinkTime,
    elapsedDrinkTime,
    progress,
    longestStreak,
    setLastDrinkTime,
    setElapsedDrinkTime,
    setProgress,
    setLongestStreak,
  } = useStore();

  //loads the last drink time from storage and updates state
  useEffect(() => {
    const loadLastDrinkTime = async () => {
      try {
        const storedTime = await AsyncStorage.getItem("lastDrinkTime");
        if (storedTime) {
          const lastTime = new Date(storedTime);
          setLastDrinkTime(lastTime);
          setElapsedDrinkTime(calculateElapsedDays(lastTime));
          setProgress(calculateProgress(lastTime));
        }
      } catch (error) {
        console.error("Failed to load last drink time:", error);
      }
    };

    loadLastDrinkTime();
  }, [setLastDrinkTime, setElapsedDrinkTime, setProgress]);

  //updates elapsed time and progress every hour
  useEffect(() => {
    const interval = setInterval(() => {
      if (lastDrinkTime) {
        setElapsedDrinkTime(calculateElapsedDays(lastDrinkTime));
        setProgress(calculateProgress(lastDrinkTime));
      }
    }, 3600000);

    return () => clearInterval(interval);
  }, [lastDrinkTime, setElapsedDrinkTime, setProgress]);

  //sets longestStreak if elapsedDrinkTime is greater than longestStreak
  useEffect(() => {
    if (lastDrinkTime) {
      const now = new Date();
      const elapsed = now.getTime() - lastDrinkTime.getTime();
      days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      if (days > longestStreak) {
        setLongestStreak(days);
        try {
          AsyncStorage.setItem("longestStreak", days.toString());
        } catch (error) {
          console.error("Failed to save longest streak:", error);
        }
      }
    }
  }, [lastDrinkTime, longestStreak, setLongestStreak]);

  const calculateElapsedDays = (startTime: Date): number => {
    const now = new Date();
    const elapsed = now.getTime() - startTime.getTime();
    return Math.floor(elapsed / (1000 * 60 * 60 * 24));
  };

  const calculateProgress = (startTime: Date): number => {
    const now = new Date();
    const elapsed = now.getTime() - startTime.getTime();
    const total = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return (elapsed / total) * 100;
  };

  const updateLastDrinkTime = async () => {
    const now = new Date();
    setLastDrinkTime(now);
    setElapsedDrinkTime(0); // Reset elapsed drink time
    setProgress(0); // Reset progress
    try {
      await AsyncStorage.setItem("lastDrinkTime", now.toISOString());
    } catch (error) {
      console.error("Failed to save last drink time:", error);
    }
  };

  const getTintColor = (progress: number) => {
    return progress >= 100 ? "purple" : "#14d9c5";
  };

  const radius = 110;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Time since last drink:</Text>
      <Svg
        height="250"
        width="250"
        viewBox="0 0 250 250"
        style={styles.progress}
      >
        <Circle
          cx="125"
          cy="125"
          r={radius}
          stroke="#727272"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx="125"
          cy="125"
          r={radius}
          stroke={getTintColor(progress)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        <Text style={styles.time}>
          {elapsedDrinkTime} {elapsedDrinkTime === 1 ? "Day" : "Days"}
        </Text>
      </Svg>
      <Text style={styles.longestStreak}>
        Money Saved: Rs. {Math.floor(days / 7) * 46 * 7}{" "}
      </Text>
      <Text style={styles.longestStreak}>
        Longest Streak: {longestStreak} {longestStreak === 1 ? "Day" : "Days"}
      </Text>
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
    // marginTop: 30,
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  time: {
    fontSize: 35,
    fontWeight: "800",
    color: "#333",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: 100 }],
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
  longestStreak: {
    fontSize: 20,
    color: "#333",
    marginVertical: 20,
    fontWeight: "bold",
  },
});

export default AlcoholTracker;
