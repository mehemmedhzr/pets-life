import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileHeader() {
  return (
    <View style={styles.profileHeader}>
      <View style={styles.profileHeaderLeft}>
        <TouchableOpacity>
          <Image source={require('../assets/images/profile.png')} style={styles.profileHeaderLeftImage} />
        </TouchableOpacity>

        <View style={styles.profileHeaderLeftText}>
          <TouchableOpacity>
            <Image source={require('../assets/images/petsLife_logo.png')} style={styles.profileHeaderLeftTextImage} />
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
  );
}

const styles = StyleSheet.create({
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
  profileHeaderLeftText: {
    flexDirection: "column",
    gap: 14,
  },
  profileHeaderLeftTextImage: {
    width: 100,
    height: 25,
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
    right: 10,
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
}); 