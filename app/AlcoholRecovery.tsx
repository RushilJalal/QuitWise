import AlcoholTracker from "@/components/AlcoholTracker";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AlcoholQuiz from "./AlcoholQuiz";
import ButtonLink from "@/components/ButtonLink";

const AlcoholRecovery: React.FC = () => {
  return (
    <View style={styles.container}>
      <AlcoholTracker />
      <ButtonLink
        href="/AlcoholQuiz"
        imageSource={require("../assets/questionnaire/alc.png")}
        style={styles.img}
      />
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
  img: {
    width: 400,
    height: 200,
    borderRadius: 5,
  },
});

export default AlcoholRecovery;
