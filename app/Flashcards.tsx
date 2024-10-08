import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Flashcards = () => {
  const images = [
    require("../assets/inshorts/1.png"),
    require("../assets/inshorts/2.png"),
    require("../assets/inshorts/3.png"),
    require("../assets/inshorts/4.png"),
    require("../assets/inshorts/5.png"),
    require("../assets/inshorts/6.jpg"),
    require("../assets/inshorts/7.png"),
    require("../assets/inshorts/8.jpg"),
    require("../assets/inshorts/9.png"),
    require("../assets/inshorts/10.png"),
    require("../assets/inshorts/11.png"),
    require("../assets/inshorts/12.png"),
    require("../assets/inshorts/13.png"),
    require("../assets/inshorts/14.png"),
    require("../assets/inshorts/15.png"),
    require("../assets/inshorts/16.png"),
    require("../assets/inshorts/17.png"),
    require("../assets/inshorts/18.png"),
    require("../assets/inshorts/19.png"),
    require("../assets/inshorts/20.png"),
    require("../assets/inshorts/21.png"),
    require("../assets/inshorts/22.png"),
    require("../assets/inshorts/23.jpg"),
    require("../assets/inshorts/24.png"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [factsRead, setFactsRead] = useState(0);

  useEffect(() => {
    const loadStoredData = async () => {
      const storedPoints = await AsyncStorage.getItem("points");
      const storedFactsRead = await AsyncStorage.getItem("factsRead");
      if (storedPoints !== null) setPoints(parseInt(storedPoints, 10));
      if (storedFactsRead !== null) setFactsRead(parseInt(storedFactsRead, 10));
    };
    loadStoredData();
  }, []);

  const handleImageClick = async () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

    const newPoints = points + 5;
    const newFactsRead = factsRead + 1;
    setPoints(newPoints);
    setFactsRead(newFactsRead);
    await AsyncStorage.setItem("points", newPoints.toString());
    await AsyncStorage.setItem("factsRead", newFactsRead.toString());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImageClick}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 600,
    height: 720,
    resizeMode: "contain",
  },
});

export default Flashcards;
