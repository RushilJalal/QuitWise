import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { Text, View } from "@/components/Themed";

export default function CallScreen() {
  const handleCallPress = () => {
    Linking.openURL("tel:9560676967");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:example@example.com");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.mainbutton} onPress={handleCallPress}>
          <Image
            source={require("../../assets/mahe.jpeg")}
            style={styles.mainButtonImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Department Name</Text>
            <Text style={styles.phone}>+91 95606 76967</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
          <Image
            source={require("../../assets/pfp.png")}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Email example@example.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
          <Image
            source={require("../../assets/pfp.png")}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Email example@example.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
          <Image
            source={require("../../assets/pfp.png")}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Email example@example.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
          <Image
            source={require("../../assets/pfp.png")}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Email example@example.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: "70%",
    height: 120,
  },
  mainButtonImage: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  buttonImage: {
    width: 120,
    height: 120,
  },
  buttonText: {
    fontSize: 18,
    color: "#3d3d3d",
    fontWeight: "bold",
  },
  mainbutton: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderColor: "#14d9c5",
    borderWidth: 5,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  phone:{
    fontSize: 15,
    color: "#3d3d3d",
    marginTop: 5,
  }
});
