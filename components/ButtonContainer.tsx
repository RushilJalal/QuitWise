import React from "react";
import { View, StyleSheet } from "react-native";

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
});

export default ButtonContainer;
