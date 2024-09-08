import ButtonContainer from "@/components/ButtonContainer";
import ButtonLink from "@/components/ButtonLink";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EpigeneticAwareness = () => {
  return (
    <View style={styles.container}>
      {/* <ButtonContainer>
        <ButtonLink
          href="/"
          imageSource={require("../../assets/know button.png")}
        />
        <ButtonLink
          href="/"
          imageSource={require("../../assets/learn button.png")}
        />
      </ButtonContainer> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 20,
  },
});

export default EpigeneticAwareness;
