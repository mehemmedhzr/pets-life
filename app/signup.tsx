// app/login.tsx
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function SignUp() {
  const router = useRouter();

  const handleRegister = async () => {
    router.push("/home");
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
            <Text style={styles.title}>Регистрация </Text>
            <Text style={styles.description}>это займёт всего пару минут</Text>

            <View style={styles.stepsContainer}>
              <View style={[styles.step, styles.stepActive, styles.stepActiveBorderStart]}></View>
              <View style={styles.step}></View> 
              <View style={[styles.step, styles.stepActiveBorderEnd]}></View> 
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Персональные данные</Text>
              <Text style={styles.infoDescription}>Более точная информация о вас 
              сделает пользование приложением более эффективным</Text>
            </View>

            <TextInput
              mode="flat"
              label="Имя*"
              placeholder="имя обязательно"
              right={<TextInput.Icon icon="account" color="#456695"/>}
              theme={{
                colors: {
                  outline: "#D2D2D2",
                },
                roundness: 11,
              }}
              style={styles.input}
            />

            <TextInput
              mode="flat"
              label="Email*"
              placeholder="укажите корректный адрес"
              right={<TextInput.Icon icon="email" color="#456695"/>}
              theme={{
                colors: {
                  outline: "#D2D2D2",
                },
                roundness: 11,
              }}
              style={styles.input}
            />

            <TextInput
              mode="flat"
              label="Номер телефона*"
              placeholder="номер должен содержать от 10 до 15 символов"
              right={<TextInput.Icon icon="phone" color="#456695"/>}
              theme={{
                colors: {
                  outline: "#D2D2D2",
                },
                roundness: 11,
              }}
              style={styles.input}
            />

            <Text style={styles.requiredFields}>*помечены все обязятельные поля</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Entypo name="chevron-left" size={24} color="#192639" />
                <Text style={styles.buttonText}>Назад</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Далее</Text>
                <Entypo name="chevron-right" size={24} color="#192639" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  </LinearGradient>
  );
}

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
  stepsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 28,
  },
  step: {
    flexGrow: 1,
    height: 12,
    backgroundColor: "#ffffff",
  },
  stepActive: {
    backgroundColor: "#456695",
  },
  stepActiveBorderStart: {
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  stepActiveBorderEnd: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    marginBottom: 22,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#383838",
  },
  infoDescription: {
    fontSize: 14,
    color: "#383838",
    textAlign: "center",
  },
  input: {
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 11,
  },
  requiredFields: {
    fontSize: 12,
    color: "#8A0000",
    textAlign: "left",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 48,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#192639",
    fontWeight: "bold",
  },
});