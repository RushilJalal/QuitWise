import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Image, Text } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { View } from "@/components/Themed";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerBackground: () => (
          <View
            style={{
              backgroundColor: Colors[colorScheme ?? "light"].background,
              height: 100,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          //hamburger menu on header left
          headerLeft: () => (
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
          ),
          headerRight: () => (
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
                    source={require("../../assets/cigarette.png")}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />
                  <Text style={{ color: Colors[colorScheme ?? "light"].text }}>
                    17
                  </Text>
                </View>
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Call",
          tabBarIcon: ({ color }) => (
            // <Foundation name="telephone" size={24} color="white" />
            <TabBarIcon name="phone" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color }) => (
            // <MaterialIcons name="leaderboard" size={24} color="white" />
            <TabBarIcon name="trophy" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            // <MaterialIcons name="leaderboard" size={24} color="white" />
            <TabBarIcon name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
