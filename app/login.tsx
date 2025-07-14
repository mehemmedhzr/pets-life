import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";


export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    router.replace("/home");
  };

  const handleRegister = async () => {
    router.replace("/signup");
  };

  return (
    <LinearGradient
      colors={['#FEE3AA', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
        <KeyboardAvoidingView 
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
          keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0} 
        >
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.logoContainer}>
              <Image source={require("../assets/images/petsLife_logo.png")}/>
              <Image source={require("../assets/images/petsLife_logo_2.png")}/>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.title}>Добро пожаловать!</Text>
              <Text style={styles.description}>войдите, чтобы продолжить</Text>

              <TextInput
                mode="outlined"
                label="Email:"
                placeholder=""
                right={<TextInput.Affix text="/100" />}
                theme={{
                  colors: {
                    outline: "#D2D2D2",
                  },
                  roundness: 11,
                }}
                style={styles.input}
              />

              <TextInput
                mode="outlined"
                label="Пароль:"
                placeholder=""
                right={<TextInput.Icon icon="eye" />}
                theme={{
                  colors: {
                    outline: "#D2D2D2",
                  },
                  roundness: 11,
                }}
                style={styles.input}
              />

              <Button 
                mode="text" 
                onPress={() => console.log("test")} 
                style={styles.forgotPassword}
                textColor="#192639"
              >
                <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
              </Button>

              <Button 
                mode="contained" 
                onPress={handleLogin}
                buttonColor="#192639"
                style={styles.loginButton}
              >
                <Text style={styles.loginButtonText}>Войти</Text>
              </Button>

              <Text style={styles.orText}>или</Text>

              <Button 
                mode="outlined" 
                buttonColor="#FFFFFF"
                style={styles.googleButton}
                accessibilityLabel="Войти через Google"
                theme={{
                  colors: {
                    outline: "#383838",
                  },
                }}
              >
                <View style={styles.googleButtonTextContainer}>
                  <View style={styles.googleButtonIcon}>
                    <FontAwesome name="google" size={20} color="#383838" />
                  </View>
                  <Text style={styles.googleButtonText}>Войти через аккаунт Google</Text>
                </View>
              </Button>

              <Button 
                mode="outlined" 
                buttonColor="#4068A7"
                style={styles.facebookButton}
                maxFontSizeMultiplier={3}
                accessibilityLabel="Войти через Facebook"
                theme={{
                  colors: {
                    outline: "#383838",
                  },
                }}
              >
                <View style={styles.facebookButtonTextContainer}>
                  <View style={styles.facebookButtonIcon}>
                    <FontAwesome name="facebook" size={20} color="#ffffff" />
                  </View>
                  <Text style={styles.facebookButtonText}>Войти через Facebook</Text>
                </View>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Нет аккаунта?</Text>

                <TouchableOpacity onPress={handleRegister}>
                  <Text style={styles.signUpButtonText}> Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingInline: 36,
    height: "100%",
  },
  scrollView: {
    marginTop: 80,
    // flex: 1,
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
    marginBottom: 24,
  },
  input: {
    width: "100%",
    marginBottom: 12,
  },
  forgotPassword: {
    width: '100%',
    display: "flex",
    alignItems: "flex-end",
    marginTop: 4,
    marginBottom: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#383838",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  loginButton: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 14,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#383838",
    fontWeight: "bold",
    marginVertical: 8,
  },
  googleButton: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 14,
    marginBottom: 14,
  },
  googleButtonTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#383838",
    flexGrow: 1,
  },
  googleButtonIcon: {
    minWidth: 20,
  },
  facebookButton: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 14,
    marginBottom: 14,
  },
  facebookButtonTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  facebookButtonIcon: {
    minWidth: 20,
  },
  facebookButtonText: {
    fontSize: 16,
    color: "#ffffff",
    flexGrow: 1,
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
    marginTop: 14,
  },
  signUpText: {
    fontSize: 14,
    color: "#192639",
    fontWeight: "bold",
  },
  signUpButtonText: {
    textDecorationLine: "underline",
    fontSize: 14,
    color: "#192639",
    fontWeight: "bold",
  },
});
