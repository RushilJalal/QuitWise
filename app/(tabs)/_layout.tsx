// src/screens/_layout.tsx
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import HeaderRight from "@/components/HeaderRight";
import HamburgerMenuButton from "@/components/HamburgerMenuButton";
import HomeScreen from "@/app/(tabs)/HomeScreen";
import CallScreen from "@/app/(tabs)/CallScreen";
import LeaderboardScreen from "@/app/(tabs)/LeaderboardScreen";
import SettingsScreen from "@/app/(tabs)/SettingsScreen";

const Tabs = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        tabBarStyle: {
          backgroundColor: "#14d9c5",
          height: 80,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
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
        name="Home"
        component={HomeScreen}
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
        name="Call"
        component={CallScreen}
        options={{
          title: "Call",
          headerTitleStyle: {
            color: "black",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="phone" color={color} />,
          headerLeft: () => <HamburgerMenuButton />,
        }}
      />
      <Tabs.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          title: "Leaderboard",
          headerTitleStyle: {
            color: "black",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
          headerLeft: () => <HamburgerMenuButton />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerTitleStyle: {
            color: "black",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          headerLeft: () => <HamburgerMenuButton />,
        }}
      />
    </Tabs.Navigator>
  );
}
