import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Saloon, saloons } from "../../constants/saloons";

const locations = [
  {
    id: 1,
    title: 'Pet Point Ganjlik',
    latitude: 40.3955,
    longitude: 49.8480,
    type: 'petstore'
  },
  {
    id: 2,
    title: 'Doggie Couture by Nelya',
    latitude: 40.3948,
    longitude: 49.8430,
    type: 'boutique'
  },
  {
    id: 3,
    title: 'ZooMagic',
    latitude: 40.3930,
    longitude: 49.8530,
    type: 'zoo'
  }
];

export default function Grooming() {

  const [filter, setFilter] = useState<string | null>(null);

  const filteredLocations = filter
    ? locations.filter(loc => loc.type === filter)
    : locations;

  const navigation = useNavigation();
  const router = useRouter();

  const renderItem = ({ item }: { item: Saloon }) => (
    <View style={styles.saloonItem}>

      <View>
        <Text style={styles.saloonTitle}>{item.title}</Text>
        <View style={styles.saloonDistanceContainer}>
          <Entypo name="location-pin" size={18} color="#192639" style={styles.saloonDistanceIcon}/>
          <Text style={styles.saloonDistance}>{item.distance}</Text>
        </View>
        <View style={styles.saloonRatingContainer}>
          <Text style={styles.saloonRating}>{item.rating}</Text>
          <Image source={require('../../assets/images/saloons/rating.png')} />
        </View>
        <Text style={styles.saloonAddress}>{item.address}</Text>
        <Text style={styles.saloonWorkingHours}>{item.workingHours}</Text>
        <Text style={styles.saloonPhone}>{item.phone}</Text>
      </View>
      
      <View style={styles.saloonImageContainer}>
        <Image source={item.image} resizeMode="cover" />
        <TouchableHighlight style={styles.saloonImageOverlay} onPress={() => handleSelectSaloon(item.id)}>
          <Text style={styles.saloonImageOverlayText}>Подробнее</Text>
        </TouchableHighlight>
      </View>
    </View>
  )

  const handleSelectSaloon = (id: number) => {
    router.push(`/grooming/${id}`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <FlatList
              data={saloons}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}

              ListHeaderComponent={() => (
                <>
                  <Image
                    source={require('../../assets/images/petsLife_logo.png')}
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

                  <View style={styles.profileSearch}>
                    <Searchbar
                      placeholder="введите адрес"
                      value=""
                      style={styles.profileSearchInput}
                      iconColor="#7B7B7B"
                      placeholderTextColor="#7B7B7B"
                      inputStyle={{ color: '#383838' }}
                    />
                  </View>

                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude: 40.3955,
                      longitude: 49.8480,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}
                  >
                    <View style={styles.filterContainer}>
                      <TouchableHighlight onPress={() => setFilter(null)} underlayColor="transparent">
                        <Text>All</Text>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={() => setFilter('petstore')} underlayColor="transparent">
                        <Text>Petstore</Text>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={() => setFilter('boutique')} underlayColor="transparent">
                        <Text>Boutique</Text>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={() => setFilter('zoo')} underlayColor="transparent">
                        <Text>Zoo</Text>
                      </TouchableHighlight>
                    </View>

                    {filteredLocations.map(loc => (
                      <Marker
                        key={loc.id}
                        coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                        title={loc.title}
                      />
                    ))}
                  </MapView>

                  <Text style={styles.saloonsTitle}>Рядом с вами</Text>
                </>
              )}
            />
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
  profileSearch: {
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 8,
  },
  profileSearchInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    color: "#7B7B7B",
    backgroundColor: "#FFFFFF",
  },
  map: { 
    borderRadius: 10,
    height: 170,
    marginBottom: 18,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffffcc',
    padding: 5,
    borderRadius: 10,
  },
  saloonsTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 18,
  },
  saloonItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 10,
    gap: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  saloonTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#383838",
    marginBottom: 8,
  },
  saloonDistanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  saloonDistanceIcon: {
    position: 'absolute',
    left: -5,
  },
  saloonDistance: {
    fontSize: 12,
    color: "#192639",
    fontWeight: "bold",
    paddingLeft: 12,
  },
  saloonRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginBottom: 12,
  },
  saloonRating: {
    fontSize: 12,
    color: "#787878",
    fontWeight: "bold",
  },
  saloonAddress: {
    fontSize: 12,
    color: "#383838",
    marginBottom: 6,
  },
  saloonWorkingHours: {
    fontSize: 12,
    color: "#383838",
    marginBottom: 6,
  },
  saloonPhone: {
    fontSize: 12,
    color: "#383838",
  },
  saloonImageContainer: {
    justifyContent: 'space-between',
    gap: 8,
  },
  saloonImageOverlay: {
    width: "100%",
    backgroundColor: '#192639',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saloonImageOverlayText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  }
})