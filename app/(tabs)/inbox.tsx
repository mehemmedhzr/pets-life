import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Inbox() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Welcome to the Inbox Screen!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
