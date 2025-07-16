import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  const toggleTheme = () => setIsDark(!isDark);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.topBar}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color={theme.icon} />
                    </Pressable>
                    <Pressable onPress={toggleTheme}>
                    <Ionicons
                        name={isDark ? 'sunny-outline' : 'moon-outline'}
                        size={24}
                        color={theme.icon}
                    />
                </Pressable>
            </View>

            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.avatar}
                    />
                    
                    <Pressable onPress={() => router.push('/home')}>
                        <Feather name="edit" size={14} color='#ffffff' style={[styles.editIcon]} />
                    </Pressable>
                </View>
                <Text style={[styles.editText, { color: theme.subtext }]}>редактировать данные</Text>
                <Text style={[styles.name, { color: theme.text }]}>Тина Шумиліна</Text>
                <Text style={[styles.phone, { color: theme.subtext }]}>+994 51 864 27 22</Text>
            </View>

            <View style={styles.buttonGroup}>
                {menuItems.map(({ icon, label }, index) => (
                <Pressable
                    key={index}
                    style={[styles.button, { backgroundColor: theme.buttonBg, borderColor: theme.border }]}
                >
                    <View style={styles.buttonContent}>
                    <Ionicons name={icon as any} size={20} color={theme.icon} />
                    <Text style={[styles.buttonText, { color: theme.text }]}>{label}</Text>
                    </View>
                </Pressable>
                ))}
            </View>

            <View style={styles.logoutContainer}>
            <Pressable style={[styles.logoutButton, { backgroundColor: theme.logoutBg, borderColor: theme.logoutBorder }]} onPress={() => router.push('/login')}>
                <View style={styles.buttonContent}>
                    <Feather name="log-out" size={20} color={theme.logout} />
                    <Text style={[styles.logoutText, { color: theme.logout }]}>Выход</Text>
                </View>
            </Pressable>
            </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const menuItems = [
  { icon: 'settings-outline', label: 'Настройки аккаунта' },
  { icon: 'paw-outline', label: 'Мои животные' },
  { icon: 'shield-checkmark-outline', label: 'Политика конфиденциальности' },
  { icon: 'document-text-outline', label: 'Правила пользования' },
  { icon: 'information-circle-outline', label: 'О нас' },
];

const lightTheme = {
  background: '#ffffff',
  text: '#242424',
  subtext: '#242424',
  icon: '#242424',
  buttonBg: '#FEE3AA',
  border: '#F9CBA7',
  logout: '#ffffff',
  logoutBg: '#192639',
  logoutBorder: 'transparent',
};

const darkTheme = {
  background: '#192639',
  text: '#fff',
  subtext: '#ccc',
  icon: '#ffffff',
  buttonBg: 'transparent',
  border: '#ffffff',
  logout: '#ffffff',
  logoutBg: '#192639',
  logoutBorder: '#ffffff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 8,
  },
  editIcon: {
    position: 'absolute',
    bottom: 4,
    right: 0,
    backgroundColor: '#192639',
    zIndex: 100,
    borderRadius: 50,
    paddingTop: 9,
    paddingLeft: 11,
    paddingRight: 9,
    paddingBottom: 9,
  },
  editText: {
    fontSize: 12,
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  phone: {
    fontSize: 14,
  },
  buttonGroup: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    padding: 14,
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    fontSize: 14,
  },
  logoutContainer: {
    paddingHorizontal: 20,

  },
  logoutButton: {
    padding: 14,
    marginTop: 30,
    alignItems: 'flex-start',
    borderRadius: 10,
    maxWidth: 150,
    borderWidth: 1,
  },
  logoutText: {
    fontSize: 14,
  },
});

export default ProfileScreen;
