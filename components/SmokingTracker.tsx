import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../useStore";
import { Circle, Svg } from "react-native-svg";

let days: number = 0;

const SmokingTracker = () => {
  const {
    lastSmokeTime,
    elapsedSmokeTime,
    smokeProgress,
    longestSmokeStreak,
    dailyConsumption,
    setLastSmokeTime,
    setElapsedSmokeTime,
    setSmokeProgress,
    setLongestSmokeStreak,
  } = useStore();

  // Loads the last smoke time from storage and updates state
  useEffect(() => {
    const loadLastSmokeTime = async () => {
      try {
        const storedTime = await AsyncStorage.getItem("lastSmokeTime");
        if (storedTime) {
          const lastTime = new Date(storedTime);
          setLastSmokeTime(lastTime);
          setElapsedSmokeTime(calculateElapsedDays(lastTime));
          setSmokeProgress(calculateProgress(lastTime));
        }
      } catch (error) {
        console.error("Failed to load last smoke time:", error);
      }
    };

    loadLastSmokeTime();
  }, [setLastSmokeTime, setElapsedSmokeTime, setSmokeProgress]);

  // Updates elapsed time and progress every hour
  useEffect(() => {
    const interval = setInterval(() => {
      if (lastSmokeTime) {
        setElapsedSmokeTime(calculateElapsedDays(lastSmokeTime));
        setSmokeProgress(calculateProgress(lastSmokeTime));
      }
    }, 3600000);

    return () => clearInterval(interval);
  }, [lastSmokeTime, setElapsedSmokeTime, setSmokeProgress]);

  // Sets longestSmokeStreak if elapsedSmokeTime is greater than longestSmokeStreak
  useEffect(() => {
    if (lastSmokeTime) {
      const now = new Date();
      const elapsed = now.getTime() - lastSmokeTime.getTime();
      days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      if (days > longestSmokeStreak) {
        setLongestSmokeStreak(days);
        try {
          AsyncStorage.setItem("longestSmokeStreak", days.toString());
        } catch (error) {
          console.error("Failed to save longest smoke streak:", error);
        }
      }
    }
  }, [lastSmokeTime, longestSmokeStreak, setLongestSmokeStreak]);

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

  const updateLastSmokeTime = async () => {
    const now = new Date();
    setLastSmokeTime(now);
    setElapsedSmokeTime(0); // Reset elapsed smoke time
    setSmokeProgress(0); // Reset progress
    try {
      await AsyncStorage.setItem("lastSmokeTime", now.toISOString());
    } catch (error) {
      console.error("Failed to save last smoke time:", error);
    }
  };

  const getTintColor = (progress: number) => {
    return progress >= 100 ? "purple" : "#14d9c5";
  };

  const radius = 110;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (smokeProgress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Time since last smoke:</Text>
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
          stroke={getTintColor(smokeProgress)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        <Text style={styles.time}>
          {elapsedSmokeTime} {elapsedSmokeTime === 1 ? "Day" : "Days"}
        </Text>
      </Svg>
      <Text style={styles.longestStreak}>
        Money saved since last smoke: Rs. {days * 20 * dailyConsumption}
      </Text>
      <Text style={styles.longestStreak}>
        Longest Streak: {longestSmokeStreak}{" "}
        {longestSmokeStreak === 1 ? "Day" : "Days"}
      </Text>
      <TouchableOpacity style={styles.button} onPress={updateLastSmokeTime}>
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

export default SmokingTracker;
