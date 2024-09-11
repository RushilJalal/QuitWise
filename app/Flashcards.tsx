import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Flashcards = () => {
  const images = [
    require("../assets/inshorts/1.png"),
    require("../assets/inshorts/2.png"),
    require("../assets/inshorts/3.png"),
    require("../assets/inshorts/4.png"),
    require("../assets/inshorts/5.png"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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
