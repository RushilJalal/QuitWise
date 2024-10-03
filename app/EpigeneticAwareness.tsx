import ButtonContainer from "@/components/ButtonContainer";
import ButtonLink from "@/components/ButtonLink";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EpigeneticAwareness = () => {
  return (
    <View style={styles.container}>
      <ButtonLink
        href="/Flashcards"
        imageSource={require("../assets/know button.png")}
        style={styles.img}
      />
      <ButtonLink
        href="/Quiz"
        imageSource={require("../assets/test button.png")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 5,
  },
});

export default EpigeneticAwareness;
