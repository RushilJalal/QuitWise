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
  // pass phone number into function

  const handleCallPress = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:example@example.com");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.mainbutton}
          onPress={() => {
            handleCallPress("1800-599-0019");
          }}
        >
          <Image
            source={require("../../assets/state_emblem.png")}
            style={styles.buttonImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>National Helpline</Text>
            <Text style={styles.phone}>1800-599-0019</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainbutton}
          onPress={() => {
            handleCallPress("+91 8202922761");
          }}
        >
          <Image
            source={require("../../assets/mahe.jpeg")}
            style={styles.mainButtonImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>
              Department of {"\n"}Emergency Medicine
            </Text>
            <Text style={styles.phone}>+91 8202922761</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainbutton}
          onPress={() => {
            handleCallPress("+91 8202922217");
          }}
        >
          <Image
            source={require("../../assets/mahe.jpeg")}
            style={styles.mainButtonImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>
              Department of {"\n"}Psychiatry
            </Text>
            <Text style={styles.phone}>+91 8202922217</Text>
          </View>
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
    width: 360,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  phone: {
    fontSize: 15,
    color: "#3d3d3d",
    marginTop: 5,
  },
});
