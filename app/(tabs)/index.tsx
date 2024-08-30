import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.buttonContainer}>
        <Link href="/page1" asChild>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/epigenetic awareness.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Link href="/page2" asChild>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/vr therapy.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Link href="/page3" asChild>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/alcohol recovery.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Link href="/page4" asChild>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/smoking cessation.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Link href="/page5" asChild>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/mental health support.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Link href="/page6" asChild>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/progress tracking.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    width: "48%", // Adjust the width to fit two buttons per row
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
});
