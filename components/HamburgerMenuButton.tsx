import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HamburgerMenuButton: React.FC = () => {
  return (
    <Link href="/menu" asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="bars"
            size={25}
            color={"black"}
            style={{
              marginLeft: 15,
              opacity: pressed ? 0.5 : 1,
            }}
          />
        )}
      </Pressable>
    </Link>
  );
};

export default HamburgerMenuButton;
