import { Saloon } from "@/constants/saloons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ContactView({ saloon }: { saloon: Saloon }) {
    return (
        <View style={styles.container}>
            <ContactItem icon="phone-outline" text={saloon.phone} />
            <ContactItem icon="whatsapp" text={saloon.phone} />
            <ContactItem icon="instagram" text={saloon.instagram} />
            <ContactItem icon="map-marker" text={saloon.address} />
        </View>
    )
}   

const ContactItem = ({ icon, text }: { icon: string, text: string | undefined }) => {
    return (
        <View style={styles.contactItem}>
            <MaterialCommunityIcons name={icon as any} size={24} color="#192639" />
            <Text style={styles.contactItemText}>{text}</Text>          
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    contactItemText: {
        fontSize: 16,
        color: '#192639',
    },
})