import { Saloon, saloons, Service } from "@/constants/saloons";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ContactView from "./ContactView";
import ReviewsView from "./ReviewsView";
import ServicesView from "./ServicesView";

const TABS = ['services', 'contacts', 'reviews'];

export default function SaloonDetail() {

    const router = useRouter();

    const { saloonId } = useLocalSearchParams();

    const [activeTab, setActiveTab] = useState<'services' | 'contacts' | 'reviews'>('services');

    const saloon = saloons.find(saloon => saloon.id === Number(saloonId))

    const renderTabContent = () => {
        switch (activeTab) {
            case 'services':
                return saloon?.services || [];
            case 'contacts':
                return [];
            case 'reviews':
                return [];
            default:
                return [];
        }
    }

    const renderItem = ({ item }: { item: Service }) => {
        if (activeTab === 'services') {
            return <ServicesView service={item} />;
        }
        return null;
    }

    const ListHeaderComponent = () => (
        <View>
            <View style={styles.saloonContentContainer}>
                <Image source={saloon?.imageInner} style={styles.saloonImage} />

                <View style={styles.saloonInfoContainer}>
                    <Text style={styles.saloonTitle}>{saloon?.title}</Text>
                    <View style={styles.saloonRatingContainer}>
                        <Text style={styles.saloonRating}>{saloon?.rating}</Text>
                        <Image source={require('../../../../assets/images/saloons/rating.png')} />
                    </View>
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
                            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab === 'services' ? 'Услуги и цены' : tab === 'contacts' ? 'Контакты' : 'Отзывы'}</Text>
                        </TouchableHighlight>
                    ))
                }
            </View>

            {activeTab === 'contacts' && <ContactView saloon={saloon as Saloon} />}
            {activeTab === 'reviews' && <ReviewsView />}
        </View>
    );

    const ListFooterComponent = () => {
        if (activeTab === 'services') {
            return (
                <TouchableHighlight style={styles.showMoreButton} onPress={() => router.push(`/grooming/${saloonId}/booking`)}>
                    <Text style={styles.showMoreButtonText}>продолжить запись</Text>
                </TouchableHighlight>
            );
        }
        return null;
    };

    const navigation = useNavigation();
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* Fixed Header */}
                    <View style={styles.fixedHeader}>
                        <Image
                            source={require('../../../../assets/images/petsLife_logo.png')}
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
                    </View>

                    {/* Single FlatList for all content */}
                    <FlatList
                        data={renderTabContent()}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                        ListHeaderComponent={ListHeaderComponent}
                        ListFooterComponent={ListFooterComponent}
                        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    fixedHeader: {
        backgroundColor: "#fff",
        paddingTop: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(56, 56, 56, 0.45)",
        zIndex: 1000,
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
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomColor: 'rgba(56, 56, 56, 0.7)',
        borderBottomWidth: 0.5,
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
    saloonRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    saloonRating: {
        fontSize: 12,
        color: '#787878',
        fontWeight: 'bold',
    },
    saloonAddress: {
        fontSize: 12,
        color: '#383838',
    },
    saloonDescription: {
        fontSize: 12,
        color: '#383838',
        fontWeight: 'bold'
    },
    saloonPhone: {
        fontSize: 12,
        color: '#383838',
    },
    tabOptionsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 10,
        width: '100%',
    },
    tab: {
        flex: 1,
        paddingBottom: 4,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomColor: '#383838',
        borderBottomWidth: 1,
    },
    tabText: {
        fontSize: 14,
        color: '#192639',
    },
    activeTabText: {
        fontWeight: 'bold',
    },
    showMoreButton: {
        backgroundColor: '#192639',
        paddingHorizontal: 18,
        paddingVertical: 17,
        borderRadius: 11,
        marginTop: 16,
    },
    showMoreButtonText: {   
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold', 
        textAlign: 'center',
    },
})