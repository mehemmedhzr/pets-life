// app/_layout.tsx
import { darkTheme, lightTheme } from "@/constants/theme";
import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const scheme = useColorScheme();

  return (
      <PaperProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
        <Slot />
      </PaperProvider>
  );
}
