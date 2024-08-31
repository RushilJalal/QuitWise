import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Image, Text, Platform } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { View } from "@/components/Themed";
import HeaderRight from "@/components/HeaderRight";

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
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
          tabBarStyle: {
            backgroundColor: "#14d9c5",
            height: 80,
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor:
            Colors[colorScheme ?? "light"].tabIconDefault,
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
            headerTitleStyle: {
              color: "black",
            },
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
            headerRight: () => <HeaderRight />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: "Call",
            headerTitleStyle: {
              color: "black",
            },
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
            headerTitleStyle: {
              color: "black",
            },
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
            headerTitleStyle: {
              color: "black",
            },
            tabBarIcon: ({ color }) => (
              // <MaterialIcons name="leaderboard" size={24} color="white" />
              <TabBarIcon name="cog" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
