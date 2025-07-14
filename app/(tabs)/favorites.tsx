import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Welcome to the Favorites Screen!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
