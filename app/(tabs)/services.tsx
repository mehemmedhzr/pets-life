import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Services() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Welcome to the Services Screen!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
