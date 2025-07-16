import { saloons, Service } from "@/constants/saloons";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { DatePickerInput, TimePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Booking() {

    const navigation = useNavigation()
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [visible, setVisible] = useState(false);
    const [time, setTime] = useState({ hours: 16, minutes: 0 });
    const [checked, setChecked] = useState<string[]>([]);
    const { saloonId } = useLocalSearchParams();

    const saloon = saloons.find(saloon => saloon.id = Number(saloonId))

    const [chosenService, setChosenService] = useState<Service | null>(saloon?.services?.[0] || null);

    const renderItem = ({ item }: { item: Service }) => {
        return (
            <View style={styles.serviceContainer}>
                <TouchableHighlight
                    style={[styles.service, chosenService?.id === item.id && styles.activeService]}
                    onPress={() => setChosenService(item)}
                    underlayColor="#FEE3AA"
                >
                    <View>
                        <Image source={item.image} style={styles.serviceImage} resizeMode="contain" />
                        <View style={styles.serviceTitleContainer}>
                            <Text style={styles.serviceTitle}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    const toggleCheckbox = (value: string) => {
        setChecked(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
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

                        <Text style={styles.backButtonText}>Бронирование</Text>

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
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingHorizontal: 16 }} >
                        <View style={styles.listHeader}>
                            <Text style={styles.listHeaderText}>Выберите услугу</Text>
                        </View>
                    </View>

                    <FlatList
                        data={saloon?.services || []}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: 10 }}
                    />

                    <View style={{ paddingHorizontal: 16 }} >
                        <View>
                            <View style={styles.listHeader}>
                                <Text style={styles.listHeaderText}>Выберите дату и время</Text>
                            </View>

                            <DatePickerInput
                                locale="ru"
                                label="Месяц и число"
                                value={date}
                                onChange={setDate}
                                inputMode="start"
                                style={{ backgroundColor: '#fff' }}
                                mode="outlined"
                                theme={{
                                    colors: {
                                        primary: "gray",
                                        outline: "gray",
                                    },
                                }}
                            />

                            <Button
                                onPress={() => setVisible(true)}
                                icon="clock"
                                mode="outlined"
                                textColor="#383838"
                                style={{ marginTop: 10, borderRadius: 3 }}
                            >
                                Время: {time.hours}:{time.minutes.toString().padStart(2, '0')}
                            </Button>

                            <TimePickerModal
                                visible={visible}
                                onDismiss={() => setVisible(false)}
                                onConfirm={({ hours, minutes }) => {
                                    setVisible(false);
                                    setTime({ hours, minutes });
                                }}
                                locale="ru"
                            />
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 16 }} >
                        <View>
                            <View style={styles.listHeader}>
                                <Text style={styles.listHeaderText}>Дополнительные услуги</Text>
                            </View>

                            {/* Checkbox */}
                            <Checkbox.Item
                                label="Чистка зубов"
                                status={checked.includes("teeth") ? "checked" : "unchecked"}
                                onPress={() => toggleCheckbox("teeth")}
                                disabled
                            />
                            <Checkbox.Item
                                label="Средство от блох + 5azn"
                                status={checked.includes("flea") ? "checked" : "unchecked"}
                                onPress={() => toggleCheckbox("flea")}
                                uncheckedColor="#FFDF9C"
                                color="#FFDF9C"
                                theme={{
                                    colors: {
                                        onSurface: "#383838",
                                    },
                                }}
                            />
                            <Checkbox.Item
                                label="Чистка ушей"
                                status={checked.includes("ears") ? "checked" : "unchecked"}
                                onPress={() => toggleCheckbox("ears")}
                                disabled
                            />
                        </View>
                    </View>

                    <View style={styles.seperatorLine}></View>

                    <View style={styles.summaryContainer}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Сумма к оплате:</Text>
                            <Text style={styles.value}>45 azn.</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Услуга:</Text>
                            <Text style={styles.value}>Стрижка кошки</Text>
                        </View>

                        <View style={[styles.row, styles.selectRow]}>
                            <Text style={styles.label}>Запись для</Text>
                            <TouchableOpacity>
                                <Text style={styles.selectText}>+выберите питомца</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity>
                                <View style={styles.backTextContainer}>
                                    <Entypo name="chevron-thin-left" size={24} color="#192639" />
                                    <Text style={styles.backText}>Назад</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.submitButton}>
                                <Text style={styles.submitText}>завершить запись</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    listHeader: {
        marginTop: 20,
        marginBottom: 18,
    },
    listHeaderText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#242424",
    },
    serviceContainer: {
        borderRadius: 12,
        marginRight: 10,
    },
    service: {
        padding: 6,
        borderRadius: 12,
        borderColor: 'rgba(167, 168, 174, 0.42)',
        borderWidth: 1,
        height: "100%",
    },
    activeService: {
        backgroundColor: '#FEE3AA',
    },
    serviceImage: {
        height: 75,
        width: 120,
    },
    serviceTitleContainer: {
        alignItems: 'center',
        paddingTop: 4,
    },
    serviceTitle: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 14,
        maxWidth: 110,
    },
    seperatorLine: {
        height: 8,
        backgroundColor: "#FEE3AA",
        width: '100%',
    },

    summaryContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 14,
        paddingBottom: 40,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    label: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#242424",
    },
    value: {
        fontSize: 15,
        color: "#242424",
    },
    selectRow: {
        paddingTop: 10,
    },
    selectText: {
        textDecorationLine: "underline",
        fontWeight: "bold",
        fontSize: 14,
        color: "#242424",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        alignItems: "center",
    },
    backTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    backText: {
        fontSize: 16,
        color: "#3A1F1F",
        fontWeight: "bold",
    },
    submitButton: {
        backgroundColor: "#192639",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    submitText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})