import ProfileHeader from "@/components/ProfileHeader";
import { useNavigation } from "expo-router";
import { useRef } from "react";
import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface Service {
  id: number;
  title: string;
  image?: ImageSourcePropType;
}

const services = [
  {
    id: 1,
    title: "Клиники",
    image: require('../../assets/images/services/clinics.png')
  },
  {
    id: 2,
    title: "Груминг салоны",
    image: require('../../assets/images/services/grooming.png')
  },
  {
    id: 3,
    title: "Зоомагазины",
    image: require('../../assets/images/services/zoomagazine.png')
  },
  {
    id: 4,
    title: "Отели",
    image: require('../../assets/images/services/hotels.png')
  },
  {
    id: 5,
    title: "Выгул собак",
    image: require('../../assets/images/services/walkdog.png')
  },
  {
    id: 6,
    title: "Зоотакси",
    image: require('../../assets/images/services/zootaxi.png')
  },
  {
    id: 7,
    title: "Ветеринар на дом",
    image: require('../../assets/images/services/homevet.png')
  }
];

interface ServiceType {
  id: number;
  title: string;
}

const serviceTypes = [
  {
    id: 1,
    title: "Услуги",
  },
  {
    id: 2,
    title: "Дневник питомца",
  },
  {
    id: 3,
    title: "Форум",
  },
];

export default function Services() {

  const flatListRef = useRef<FlatList<any>>(null);

  const navigation = useNavigation();
  const renderServiceItem = ({ item }: { item: Service }) => (
    <TouchableHighlight style={styles.servicesItem} onPress={() => { }} underlayColor="#FEE3AA">
      <View>
        <Image source={item.image} style={styles.servicesItemImage} />
        <Text style={styles.servicesItemTitle}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  )

  const renderServiceTypeItem = ({ item }: { item: ServiceType }) => (
    <TouchableHighlight style={styles.servicesTypeItem} onPress={() => scrollToItem(2)}>
      <Text>{item.title}</Text>
    </TouchableHighlight>
  )

  const scrollToItem = (index: number) => {
    console.log(index)
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ 
        index: index, 
        animated: true,
      });
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.container}>
          {/* <View> */}
            {/* <View style={styles.backButton}>
              <TouchableHighlight
                onPress={() => navigation.goBack()}
                underlayColor="transparent"
                style={styles.backButtonIcon}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <AntDesign name="arrowleft" size={24} color="#383838" />
              </TouchableHighlight>
              <Text style={styles.backButtonText}>Все категории</Text>
            </View> */}
          {/* </View> */}

          <FlatList
            data={services}
            renderItem={renderServiceItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
            ref={flatListRef}

            ListHeaderComponent={() => (
              <>
                <View style={styles.profileContainer}>
                  <ProfileHeader />

                  <ScrollView stickyHeaderIndices={[0]}>
                    <View style={styles.servicesTypeContainer} >
                      <FlatList
                        data={serviceTypes}
                        renderItem={renderServiceTypeItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 16 }}
                      />
                    </View>
                  </ScrollView>
                </View>

                <View>
                  <Text style={styles.servicesTitles}>Услуги</Text>
                </View>
              </>
            )}

            ListFooterComponent={() => (
              <>
                <View style={styles.petDiaryContainer} >
                  <Text style={styles.servicesTitles}>Дневник питомца</Text>

                  <View style={styles.petDiaryItem}>
                    <View style={styles.petDiaryItemImagesContainer}>
                      <Image source={require('../../assets/images/services/diary_hero.png')} style={styles.petDiaryItemImage} />
                      <Image source={require('../../assets/images/services/diary_shadow.png')} style={styles.petDiaryItemShadow} />
                      <Image source={require('../../assets/images/services/diary_note.png')} style={styles.petDiaryItemImageNote} />
                    </View>
                    
                    <View style={styles.petDiaryItemContent}>
                      <View>
                        <Text style={styles.petDiaryItemTitle}>Дорогой дневник!</Text>
                        <Text style={styles.petDiaryItemDescription}>мне не описать словами сегодняшний прием у врача..</Text>
                      </View>
                      
                      <TouchableHighlight style={styles.petDiaryItemButton}>
                        <Text style={styles.petDiaryItemButtonText}>начать дневник</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>

                <View style={styles.formContainer}>
                  <Text style={styles.servicesTitles}>Форум</Text>

                  <View style={styles.formItem}>
                    <View style={styles.formItemImagesContainer}>
                      <Image source={require('../../assets/images/services/form_hero.png')} style={styles.formItemImage} />
                      <Image source={require('../../assets/images/services/form_shadow_left.png')} style={styles.formItemShadow} />
                    </View>
                    
                    <View style={styles.formItemContent}>
                      <View>
                        <Text style={styles.formItemTitle}>Полезные статьи и новые знакомства у нас на форуме</Text>
                      </View>
                      
                      <TouchableHighlight style={styles.formItemButton}>
                        <Text style={styles.formItemButtonText}>Присоединяйся ! </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              </>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: "#AAA4A4",
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
    bottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  backButtonText: { 
    fontSize: 14,
    fontWeight: "bold",
    color: "#383838",
    flex: 1,
    textAlign: "center",
  },
  profileContainer: {
    paddingVertical: 20,
    gap: 20,
    marginBottom: 26,
  },
  servicesTypeContainer: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    left: 0,
    right: 0,
  },
  servicesTypeItem: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginTop: 12,
  },
  servicesTitles: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#383838",
    marginBottom: 16,
  },
  servicesItem: {
    backgroundColor: "#FEE3AA",
    borderRadius: 20,
    height: 190,
    width: "48%",
    marginBottom: 14,
    padding: 0,
  },
  servicesItemImage: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  servicesItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#192639",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  petDiaryContainer: {
    marginTop: 20,
    marginBottom: 32,
  },
  petDiaryItem: {
    flexDirection: "row",
    paddingTop: 28,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: "#FEE3AA",
    justifyContent: "flex-end",
  },
  petDiaryItemImagesContainer: {
    position: "absolute",
    top: 0, 
    left: 0,
  },
  petDiaryItemImage: {
    position: "absolute",
    top: 24,
    left: 0,
    zIndex: 2,
  },  
  petDiaryItemShadow: {
    position: "absolute",
    top: 24,
    left: 8,
  },
  petDiaryItemImageNote: {
    position: "absolute",
    top: 88,
    left: 76,
    zIndex: 1,
  },
  petDiaryItemContent: {
    maxWidth: 175,
    justifyContent: "space-between",
  },
  petDiaryItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#383838",
    marginBottom: 14,
    textAlign: "center",
  },
  petDiaryItemDescription: {
    fontSize: 14,
    color: "#383838",
    fontStyle: "italic",
    marginBottom: 24,
  },
  petDiaryItemButton: {
    backgroundColor: '#192639',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  petDiaryItemButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  formContainer: {
    marginBottom: 4,
  },
  formItem: {
    flexDirection: "row",
    paddingTop: 48,
    paddingBottom: 18,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: "#192639",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  formItemImagesContainer: {
    position: "absolute",
    top: 0, 
    left: 0,
  },
  formItemImage: {
    position: "absolute",
    top: 4,
    left: -28,
    zIndex: 9999,
  },  
  formItemShadow: {
    position: "absolute",
    top: 90,
    left: 0,
  },
  formItemContent: {
    maxWidth: 155,
    justifyContent: "space-between",
  },
  formItemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 36,
    textAlign: "center",
  },
  formItemButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  formItemButtonText: {
    color: "#192639",
    fontSize: 12,
    fontWeight: "bold",
  }
})
