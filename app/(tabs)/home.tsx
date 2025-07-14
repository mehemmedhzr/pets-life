import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.profileContainer}>
              <View style={styles.profileHeader}>
                <View style={styles.profileHeaderLeft}>
                  <TouchableOpacity>
                    <Image source={require('../../assets/images/profile.png')} style={styles.profileHeaderLeftImage} />
                  </TouchableOpacity>

                  <View style={styles.profileHeaderLeftText}>
                    <TouchableOpacity>
                      <Image source={require('../../assets/images/petsLife_logo.png')} style={styles.profileHeaderLeftTextImage} />
                    </TouchableOpacity>

                    <View>
                      <Text style={styles.profileHeaderLeftTextWelcome}>
                        Добро пожаловать, <Text style={styles.profileHeaderLeftTextBold}>Тина.</Text>
                      </Text>
                      <Text style={styles.profileHeaderLeftTextWelcome}>Что вы ищите?</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.profileHeaderRight}>
                  <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="#383838" />

                    <View style={styles.profileHeaderRightBadge}>
                      <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>1</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.profileSearch}>
                <Searchbar
                  placeholder="я ищу..."
                  value=""
                  style={styles.profileSearchInput}
                  iconColor="#7B7B7B"
                  placeholderTextColor="#7B7B7B"
                  inputStyle={{ color: '#383838' }}
                />
              </View>
            </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  profileContainer: {
    borderTopWidth: 1,
    borderTopColor: "#AAA4A4",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  profileHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  profileHeaderLeftImage: {
    width: 60,
    height: 60,
  },
  profileHeaderLeftTextImage: {
    width: 100,
    height: 25,
  },
  profileHeaderLeftText: {
    flexDirection: "column",
    gap: 14,
  },
  profileHeaderLeftTextWelcome: {
    fontSize: 14,
    fontWeight: "400",
    color: "#383838",
  },
  profileHeaderLeftTextBold: {
    fontWeight: "bold",
  },
  profileHeaderRight: {
    position: "relative",
  },
  profileHeaderRightBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  profileSearch: {
    borderRadius: 10,
  },
  profileSearchInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    color: "#7B7B7B",
    backgroundColor: "#FFFFFF",
  },
});