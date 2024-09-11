import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import useStore from "../useStore";

const HeaderRight = () => {
  const colorScheme = useColorScheme();
  const elapsedDrinkTime = useStore((state) => {
    return state.elapsedDrinkTime;
  });
  const elapsedSmokeTime = useStore((state) => {
    return state.elapsedSmokeTime;
  });

  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable>
        {({ pressed }) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              marginRight: 15,
            }}
          >
            <Image
              source={require("../assets/alcohol top right.png")}
              style={{
                width: 20,
                height: 28,
                marginRight: 15,
                opacity: pressed ? 0.5 : 1,
              }}
            />
            <Text
              style={{
                color: Colors[colorScheme ?? "light"].text,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {elapsedDrinkTime}
            </Text>
          </View>
        )}
      </Pressable>
      <Pressable>
        {({ pressed }) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              marginRight: 15,
            }}
          >
            <Image
              source={require("../assets/cigarette.png")}
              style={{
                width: 25,
                height: 25,
                marginRight: 15,
                opacity: pressed ? 0.5 : 1,
              }}
            />
            <Text
              style={{
                color: "#ff4500",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {elapsedSmokeTime}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default HeaderRight;
