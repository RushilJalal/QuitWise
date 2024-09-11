import React, { useState } from "react";
import { WebView } from "react-native-webview";
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

const YoutubeWebView: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/JYwUS06-5Ho"
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
          allowsFullscreenVideo={true}
          source={{ uri: videoUrl }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              handleButtonPress("https://www.youtube.com/embed/JYwUS06-5Ho")
            }
          >
            <ImageBackground
              source={require("../assets/vr therapy/8d music.png")}
              style={styles.button}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleButtonPress("https://www.youtube.com/embed/XU58px3OGMo")
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
              handleButtonPress("https://www.youtube.com/embed/uKvc9dUgykA")
            }
          >
            <ImageBackground
              source={require("../assets/vr therapy/relaxing music.png")}
              style={styles.button}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleButtonPress("https://www.youtube.com/embed/zhGUvZLO0KY")
            }
          >
            <ImageBackground
              source={require("../assets/vr therapy/singing bowls.png")}
              style={styles.button}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

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
