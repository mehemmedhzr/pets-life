import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 85,
          paddingTop: 10,

          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 10, // Android

          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? "#FED98A" : '#383838'}
              size={32}
            />
          ),
          tabBarIconStyle: {
            width: 32,
            height: 32,
          },
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerShown: false,

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "mail" : "mail-outline"}
              color={focused ? "#FED98A" : '#383838'}
              size={32}
            />
          ),
          tabBarIconStyle: {
            width: 32,
            height: 32,
          },
        }}
      />

      <Tabs.Screen
        name="reader"
        options={{
          title: "Reader",
          headerShown: false,

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "barcode" : "barcode-outline"}
              color={focused ? "#FED98A" : '#383838'}
              size={32}
            />
          ),
          tabBarIconStyle: {
            width: 32,
            height: 32,
          },
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          headerShown: false,

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "paw" : "paw-outline"}
              color={focused ? "#FED98A" : '#383838'}
              size={32}
            />
          ),
          tabBarIconStyle: {
            width: 32,
            height: 32,
          },
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              color={focused ? "#FED98A" : '#383838'}
              size={32}
            />
          ),
          tabBarIconStyle: {
            width: 32,
            height: 32,
          },
        }}
      />

      <Tabs.Screen
        name="grooming/index"
        options={{
          href: null, // hides from tab bar
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="grooming/[saloonId]/booking"
        options={{
          href: null, // hides from tab bar
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="grooming/[saloonId]/index"
        options={{
          href: null, // hides from tab bar
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="grooming/[saloonId]/ContactView"
        options={{
          href: null, // hides from tab bar
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="grooming/[saloonId]/ServicesView"
        options={{
          href: null, // hides from tab bar
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="grooming/[saloonId]/ReviewsView"
        options={{
          href: null, // hides from tab bar
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
