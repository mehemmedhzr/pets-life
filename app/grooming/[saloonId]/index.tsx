import { saloons } from "@/constants/saloons";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TABS = ['services', 'contacts', 'reviews'];

export default function SaloonDetail() {
    const { saloonId } = useLocalSearchParams();

    const [activeTab, setActiveTab] = useState<'services' | 'contacts' | 'reviews'>('services');

    const saloon = saloons.find(saloon => saloon.id === Number(saloonId))

    const renderTab = (tab: string) => {
        switch (tab) {
            case 'services':
                return <Text>Services content</Text>;
            case 'contacts':
                return <Text>Contacts content</Text>;
            case 'reviews':
                return <Text>Reviews content</Text>;
            default:
                return <Text>Select a tab</Text>;
        }
    }

    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Image
                            source={require('../../../assets/images/petsLife_logo.png')}
                            style={styles.headerImage}
                            resizeMode="contain"
                        />

                        <View style={styles.backButton}>
                            <TouchableHighlight
                                onPress={() => navigation.goBack()}
                                underlayColor="transparent"
                                style={styles.backButtonIcon}
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            >
                                <AntDesign name="arrowleft" size={24} color="#383838" />
                            </TouchableHighlight>

                            <Text style={styles.backButtonText}>Груминг салоны</Text>

                            <View style={styles.profileHeaderRight}>
                                <TouchableOpacity>
                                    <Ionicons name="notifications-outline" size={24} color="#383838" />

                                    <View style={styles.profileHeaderRightBadge}>
                                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>1</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.saloonContentContainer}>
                            <Image source={saloon?.image} style={styles.saloonImage} />

                            <View style={styles.saloonInfoContainer}>
                                <Text style={styles.saloonTitle}>{saloon?.title}</Text>
                                <Text style={styles.saloonRating}>{saloon?.rating}</Text>
                                <Text style={styles.saloonAddress}>{saloon?.address}</Text>
                                <Text style={styles.saloonDescription}>{saloon?.description}</Text>
                                <Text style={styles.saloonPhone}>{saloon?.phone}</Text>
                            </View>
                        </View>

                        <View style={styles.tabOptionsContainer}>
                            {
                                TABS.map(tab => (
                                    <TouchableHighlight 
                                        key={tab} 
                                        style={[styles.tab, activeTab === tab && styles.activeTab]} 
                                        onPress={() => setActiveTab(tab as 'services' | 'contacts' | 'reviews')}
                                        underlayColor="transparent"
                                    >
                                        <Text style={styles.tabText}>{tab === 'services' ? 'Услуги' : tab === 'contacts' ? 'Контакты' : 'Отзывы'}</Text>
                                    </TouchableHighlight>
                                ))
                            }
                        </View>

                        <View style={styles.tabContentContainer}>
                            {renderTab(activeTab)}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: 20,
        paddingBottom: 46,
        borderTopWidth: 1,
        borderTopColor: "rgba(56, 56, 56, 0.45)",
    },
    innerContainer: {
        paddingHorizontal: 16,
    },
    headerImage: {
        width: 90,
        height: 25,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 20,
        position: "relative",
    },
    backButtonIcon: {
        position: "absolute",
        zIndex: 2,
        left: 0,
        paddingHorizontal: 0,
        paddingVertical: 12,
    },
    backButtonText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#383838",
        flex: 1,
        textAlign: "center",
    },
    profileHeaderRight: {
        position: "absolute",
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
    saloonContentContainer: {
        marginBottom: 20,
    },
    saloonImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 16,
    },
    saloonInfoContainer: {
        gap: 8,
    },
    saloonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#383838',
    },
    saloonRating: {
        fontSize: 14,
        color: '#787878',
        fontWeight: 'bold',
    },
    saloonAddress: {
        fontSize: 14,
        color: '#383838',
    },
    saloonDescription: {
        fontSize: 14,
        color: '#383838',
    },
    saloonPhone: {
        fontSize: 14,
        color: '#383838',
    },
    tabOptionsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#E0E0E0',
    },
    tabText: {
        fontSize: 14,
        color: '#383838',
    },
    tabContentContainer: {
        flex: 1,
    },
})