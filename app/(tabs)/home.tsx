// app/(tabs)/home.tsx
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Welcome to the Home Screen!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
