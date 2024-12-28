import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { usePathname } from "expo-router";
import routes from "../routes";
import colors from "../colors";

export default function TabLayout() {
  const currentPath = usePathname();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {Object.entries(routes).map(([name, r]) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: r.title,
            tabBarIcon: ({ color }) => (
              <r.icon size={24} fill={color} active={currentPath === r.path} />
            ),
            tabBarStyle: { backgroundColor: colors.primary },
          }}
        />
      ))}
    </Tabs>
  );
}
