// app/login.tsx
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = async () => {
    router.replace("/home");
  };

  return (
    <View>
      <Text>SignUp Screen</Text>
      <Button title="Sign In" onPress={handleSignUp} />
    </View>
  );
}
