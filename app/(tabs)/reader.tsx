import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Reader() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Welcome to the Reader Screen!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
