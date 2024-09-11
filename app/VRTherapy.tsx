import React, { useState } from "react";
import { WebView } from "react-native-webview";
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";

const YoutubeWebView: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/p8NF8Ekw2xs"
  );

  const handleButtonPress = (url: string) => {
    setVideoUrl(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <WebView
          style={styles.webview}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true} // Enable full-screen mode
          source={{ uri: videoUrl }} // Use the state variable for the YouTube video URL
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              handleButtonPress("https://www.youtube.com/embed/p8NF8Ekw2xs")
            }
          >
            <ImageBackground
              source={require("../assets/vr therapy/8d music.png")}
              style={styles.button}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleButtonPress("https://www.youtube.com/embed/dQw4w9WgXcQ")
            }
          >
            <ImageBackground
              source={require("../assets/vr therapy/arabian music.png")}
              style={styles.button}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleButtonPress("https://www.youtube.com/embed/Q8JIO106JlM")
            }
          >
            <ImageBackground
              source={require("../assets/vr therapy/beta waves.png")}
              style={styles.button}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleButtonPress("https://www.youtube.com/embed/Q8JIO106JlM")
            }
          >
            <ImageBackground
              source={require("../assets/vr therapy/relaxing music.png")}
              style={styles.button}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// StyleSheet with proper typing
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  webview: {
    width: 400,
    height: 300,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    width: 400,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default YoutubeWebView;
