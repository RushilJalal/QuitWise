import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link, Href } from "expo-router";

interface ButtonLinkProps {
  href: string;
  imageSource: any;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, imageSource }) => {
  return (
    <Link href={href as Href<string | object>} asChild>
      <TouchableOpacity style={styles.button}>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "48%",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ButtonLink;
