import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

  const [isMyPet, setIsMyPet] = useState(false);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

            <View style={styles.profileMyPet}>
              <Text style={styles.homePageTitles}>Мой питомец</Text>

              <View style={styles.profileMyPetContainer}>
                <View style={styles.profileMyPetContainerInfo}>
                  <Text style={styles.profileMyPetContainerImageText}>Карточка питомца</Text>

                  <View style={styles.profileMyPetContainerInfoImage}>
                    <Image source={require('../../assets/images/profile.png')} style={styles.profileMyPetContainerImage} />

                    <View style={styles.profileMyPetContainerInfoImageText}>
                      <View>
                        <Text style={styles.profileMyPetContainerInfoImageTextItemTitle}>Кличка</Text>
                        <Text style={styles.profileMyPetContainerInfoImageTextItemText}>Рыжик</Text>
                      </View>

                      <View>
                        <Text style={styles.profileMyPetContainerInfoImageTextItemTitle}>Дата рождения</Text>
                        <Text style={styles.profileMyPetContainerInfoImageTextItemText}>01.05.2021</Text>
                      </View>
                    </View>
                  </View>
                </View>
                
                {
                  !isMyPet ? 
                  (
                    <View style={styles.profileMyPetContainerInfoRight}>
                      <Text style={styles.profileMyPetContainerInfoName}>Чтобы создать карточку питомца, Загрузите данные о вашем питомце,</Text>
                      <TouchableHighlight
                        onPress={() => setIsMyPet(true)}
                        style={styles.profileMyPetContainerInfoButtonContainer}>
                        <Text style={styles.profileMyPetContainerInfoButton}>Добавить питомца</Text>
                      </TouchableHighlight>
                    </View>
                  ) : (
                    <View style={styles.profileMyPetContainerInfoRightWithPet}>
                      <Image source={require('../../assets/images/cat_illustration.png')} style={styles.profileMyPetContainerImage} />
                      <TouchableHighlight
                        onPress={() => setIsMyPet(false)}
                        style={styles.profileMyPetContainerInfoButtonContainerEdit}
                      >
                        <Text style={styles.profileMyPetContainerInfoButton}>редактировать</Text>
                      </TouchableHighlight>
                    </View>
                  )
                }
              </View>
            </View>

            <View style={styles.homePagePromotions}>
                <Text style={styles.homePageTitles}>Акции для ваших питомцев</Text>

                <View style={styles.homePagePromotionsContainer}>
                  <View style={[styles.homePagePromotionsContainerItem, styles.homePagePromotionsContainerItemFull]}>

                    <View style={styles.homePagePromotionsContainerItemContent}>
                      <Text style={styles.homePagePromotionsContainerItemDate}>4 - 11 июня</Text>
                      <Text style={styles.homePagePromotionsContainerItemTitle}>скидка</Text>
                      <Text style={[styles.homePagePromotionsContainerItemTitle, styles.homePagePromotionsContainerItemTitleDiscount]}>25 %</Text>
                      <Text style={styles.homePagePromotionsContainerItemText}>премиальный корм <Text style={styles.homePagePromotionsContainerItemTextBold}>Royal Canin</Text> для кошек и собак</Text>
                    </View>
                  </View>

                  <View style={styles.homePageRemainingPromotionsContainer}>
                    <View style={[styles.homePageRemainingPromotionsContainerItem, styles.homePageRemainingPromotionsContainerItemNormal, styles.homePageRemainingPromotionsContainerItemTall]}>
                      <Image source={require('../../assets/images/promotion_doctor.png')} style={styles.homePageRemainingPromotionsContainerItemImage} />
                      <Text style={[styles.homePageRemainingPromotionsContainerItemTitle, styles.homePageRemainingPromotionsContainerItemTitleNormal]}>скидка 15 %</Text>
                      <Text style={[styles.homePageRemainingPromotionsContainerItemSubtitle, styles.homePageRemainingPromotionsContainerItemSubtitleNormal]}>плановый осмотр в Royal Vet</Text>
                    </View>
                    <View style={[styles.homePageRemainingPromotionsContainerItem]}>
                      <Image source={require('../../assets/images/promotion_cat.png')} style={[styles.homePageRemainingPromotionsContainerItemImage, styles.homePageRemainingPromotionsContainerItemImageCat]} />
                      <Text style={[styles.homePageRemainingPromotionsContainerItemTitle]}>Груминг 30 azn</Text>
                    </View>
                    <View style={[styles.homePageRemainingPromotionsContainerItem, styles.homePageRemainingPromotionsContainerItemNormal]}>
                      <Image source={require('../../assets/images/promotion_dogBone.png')} style={[styles.homePageRemainingPromotionsContainerItemImage, styles.homePageRemainingPromotionsContainerItemImageDogBone]} />
                      <Text style={[styles.homePageRemainingPromotionsContainerItemTitle, styles.homePageRemainingPromotionsContainerItemTitleNormal]}>Акция 2+1</Text>
                      <Text style={[styles.homePageRemainingPromotionsContainerItemSubtitle]}>товары для домашних животных</Text>
                    </View>
                    <View style={[styles.homePageRemainingPromotionsContainerItem, styles.homePageRemainingPromotionsContainerItemNormal, styles.homePageRemainingPromotionsContainerItemTall]}>
                      <Image source={require('../../assets/images/promotion_doctor.png')} style={styles.homePageRemainingPromotionsContainerItemImage} />
                      <Text style={[styles.homePageRemainingPromotionsContainerItemTitle, styles.homePageRemainingPromotionsContainerItemTitleNormal]}>скидка 15 %</Text>
                      <Text style={[styles.homePageRemainingPromotionsContainerItemSubtitle, styles.homePageRemainingPromotionsContainerItemSubtitleNormal]}>плановый осмотр в Royal Vet</Text>
                    </View>
                  </View>
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
    paddingHorizontal: 14,
  },
  profileContainer: {
    borderTopWidth: 1,
    borderTopColor: "#AAA4A4",
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
  profileMyPet: {
    marginTop: 22,
    marginBottom: 28,
  },
  homePageTitles: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#383838",
    marginBottom: 16,
  },
  profileMyPetContainer: {
    padding: 8,
    backgroundColor: "#FEE3AA",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileMyPetContainerInfo: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  profileMyPetContainerImageText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#383838",
    marginBottom: 8,
  },
  profileMyPetContainerInfoImage: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profileMyPetContainerImage: {
    width: 55,
    height: 85,
  },
  profileMyPetContainerInfoImageText: {
    gap: 8,
  },
  profileMyPetContainerInfoImageTextItemTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#383838",
  },
  profileMyPetContainerInfoImageTextItemText: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#383838",
  },
  profileMyPetContainerInfoRight: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexShrink: 1,
  },
  profileMyPetContainerInfoName: {
    fontSize: 14,
    color: "#192639",
    marginBottom: 16,
  },
  profileMyPetContainerInfoButtonContainer: {
    backgroundColor: "#192639",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 6,
    textAlign: "center",
  },
  profileMyPetContainerInfoButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  profileMyPetContainerInfoRightWithPet: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexShrink: 1,
    alignItems: "center",
    flexGrow: 1,
  },
  profileMyPetContainerInfoButtonContainerEdit: {
    backgroundColor: "#192639",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 6,
    textAlign: "center",
    width: "100%",
  },
  homePagePromotions: {
    marginBottom: 28,
  },
  homePagePromotionsContainer: {
    gap: 12,
  },
  homePagePromotionsContainerItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 22,
  },
  homePagePromotionsContainerItemFull: {
    backgroundColor: "#192639",
    alignItems: "flex-end",
  },
  homePagePromotionsContainerItemContent: {
    width: 185,
  },
  homePagePromotionsContainerItemDate: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "right",
    marginBottom: 12,
  },
  homePagePromotionsContainerItemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  homePagePromotionsContainerItemTitleDiscount: {
    fontSize: 34,
  },
  homePagePromotionsContainerItemText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 18,
  },
  homePagePromotionsContainerItemTextBold: {
    fontWeight: "bold",
  },
  homePageRemainingPromotionsContainer: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },
  homePageRemainingPromotionsContainerItem: {
    flexShrink: 1,
    flexGrow: 1,
    width: "47%",
    padding: 8,
    backgroundColor: "#FEE3AA",
    borderRadius: 20,
    height: 180,
    justifyContent: "flex-end",
    position: "relative",
  },
  homePageRemainingPromotionsContainerItemTall: {
    height: 220,
  },
  homePageRemainingPromotionsContainerItemNormal: {
    justifyContent: "space-between",
  },
  homePageRemainingPromotionsContainerItemImage: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  homePageRemainingPromotionsContainerItemImageCat: {
    left: "50%",
    transform: [{ translateX: "-50%" }],
  },
  homePageRemainingPromotionsContainerItemImageDogBone: {
    top: "55%",
    transform: [{ translateY: "-50%" }],
  },
  homePageRemainingPromotionsContainerItemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192639",
    marginBottom: 4,
  },
  homePageRemainingPromotionsContainerItemTitleNormal: {
    fontSize: 24,
    maxWidth: 85,
  },
  homePageRemainingPromotionsContainerItemSubtitle: {
    fontSize: 14,
    color: "#192639",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    fontWeight: "bold",
  },
  homePageRemainingPromotionsContainerItemSubtitleNormal: {
    backgroundColor: "#fff",
    fontWeight: "normal",
  }
});