import ButtonLink from "@/components/ButtonLink";
import SmokingTracker from "@/components/SmokingTracker";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SmokingCessation: React.FC = () => {
  return (
    <View style={styles.container}>
      <SmokingTracker />
      <ButtonLink
        href="/SmokingQuiz"
        imageSource={require("../assets/questionnaire/smoke.png")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  img: {
    width: 400,
    height: 200,
    borderRadius: 5,
    marginBottom: 50,
  },
});

export default SmokingCessation;
