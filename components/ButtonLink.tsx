import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { Link, Href } from "expo-router";

interface ButtonLinkProps {
  href: string;
  imageSource: any;
  style?: ViewStyle | ImageStyle;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  imageSource,
  style,
}) => {
  return (
    <Link href={href as Href<string | object>} asChild>
      <TouchableOpacity style={StyleSheet.flatten([styles.button, style])}>
        <Image
          source={imageSource}
          style={StyleSheet.flatten([styles.image, style]) as never}
        />
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
