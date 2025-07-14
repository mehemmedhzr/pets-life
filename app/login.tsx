import { useRouter } from "expo-router";
// import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";


export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    router.replace("/home");
  };

  return (
    <LinearGradient
      colors={['#FEE3AA', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
        <KeyboardAvoidingView  style={styles.container}>
            <ScrollView>
              <View style={styles.logoContainer}>
                <Image source={require("../assets/images/petsLife_logo.png")}/>
                <Image source={require("../assets/images/petsLife_logo_2.png")}/>
              </View>

              <View style={styles.formContainer}>
                <Text style={styles.title}>Добро пожаловать!</Text>
                <Text style={styles.description}>войдите, чтобы продолжить</Text>

                <TextInput
                  mode="outlined"
                  label="Outlined input"
                  placeholder="Type something"
                  right={<TextInput.Affix text="/100" />}
                />
              </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#383838",
    marginBottom: 14,
  },
  description: {
    fontSize: 16,
    color: "#383838",
  },
});
