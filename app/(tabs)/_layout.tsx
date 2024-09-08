import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import HeaderRight from "@/components/HeaderRight";
import HamburgerMenuButton from "@/components/HamburgerMenuButton";

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
            <>
              <View
                style={{
                  backgroundColor: Colors[colorScheme ?? "light"].background,
                  height: 100,
                }}
              />
              <View
                style={{
                  height: 8,
                  backgroundColor: "#e1e4e7",
                  marginBottom: 10,
                }}
              />
            </>
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
            headerLeft: () => <HamburgerMenuButton />,
            headerRight: () => <HeaderRight />,
          }}
        />
        <Tabs.Screen
          name="CallTab"
          options={{
            title: "Call",
            headerTitleStyle: {
              color: "black",
            },
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="phone" color={color} />
            ),
            headerLeft: () => <HamburgerMenuButton />,
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
              <TabBarIcon name="trophy" color={color} />
            ),
            headerLeft: () => <HamburgerMenuButton />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerTitleStyle: {
              color: "black",
            },
            tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
            headerLeft: () => <HamburgerMenuButton />,
          }}
        />
      </Tabs>
    </>
  );
}
