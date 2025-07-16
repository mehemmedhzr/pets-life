import { StyleSheet, Text, View } from "react-native";
import { Service } from "../../../../constants/saloons";

export default function ServicesView({ service }: { service: Service }) {
    return (
        <View style={styles.service}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <View style={styles.servicePrice}>
                <Text style={styles.servicePriceText}>{service.price}</Text>
            </View>
        </View>
    )
}   

const styles = StyleSheet.create({
    service: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    serviceTitle: {
        fontSize: 14,
        color: '#192639',
        fontWeight: 'bold',
    },
    servicePrice: {
        backgroundColor: '#FEE3AA',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
        width: 86,
    },
    servicePriceText: {
        fontSize: 14,
        color: '#192639',
        fontWeight: 'bold', 
        textAlign: 'center',
    },
})