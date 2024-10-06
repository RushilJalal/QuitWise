// src/index.tsx
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import useStore from "../../useStore";
import { saveStreaks } from "../../firestoreService";
import { getCurrentUser } from "../../authService";
import Login from "../../Login";
import ButtonLink from "../../components/ButtonLink";
import ButtonContainer from "../../components/ButtonContainer";

const Index = () => {
  const { longestStreak, longestSmokeStreak } = useStore();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then((user: any) => {
        setUserId(user.uid);
      })
      .catch((error) => {
        console.error("Error getting current user: ", error);
      });
  }, []);

  useEffect(() => {
    if (userId) {
      const interval = setInterval(() => {
        saveStreaks(userId, longestStreak, longestSmokeStreak);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [userId, longestStreak, longestSmokeStreak]);

  if (!userId) {
    return (
      <Login
        onLogin={() =>
          getCurrentUser().then((user: any) => setUserId(user.uid))
        }
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ButtonContainer>
        <ButtonLink
          href="/EpigeneticAwareness"
          imageSource={require("../../assets/epigenetic awareness.png")}
        />
        <ButtonLink
          href="/VRTherapy"
          imageSource={require("../../assets/vr therapy.png")}
        />
        <ButtonLink
          href="/AlcoholRecovery"
          imageSource={require("../../assets/alcohol recovery.png")}
        />
        <ButtonLink
          href="/SmokingCessation"
          imageSource={require("../../assets/smoking cessation.png")}
        />
        <ButtonLink
          href="/MentalHealthSupport"
          imageSource={require("../../assets/mental health support.png")}
        />
        <ButtonLink
          href="/ProgressTracking"
          imageSource={require("../../assets/progress tracking.png")}
        />
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Index;
