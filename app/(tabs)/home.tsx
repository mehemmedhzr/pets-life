import ProfileHeader from "@/components/ProfileHeader";
import { useMemo } from "react";
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MyPetCard from "../../components/MyPetCard";


interface NewsItem {
  id: number;
  title: string;
  description: string;
}

const news = [
  {
    id: 1,
    title: "Объявление 1",
    description: "Девочка, 2 месяца, к лотку приучена. Имеются прививки.",
  },
  {
    id: 2,
    title: "Объявление 2",
    description: "Порода Лабродор. В районе метро Низами. Откликается на имя Лаки.",
  },
]

interface ForumItem {
  id: number;
  title: string;
  images: ImageSourcePropType[];
}

const forum = [
  {
    id: 1,
    title: "Выбираем витамины для кошек",
    images: [
      require('../../assets/images/forum/image_17.png'),
      require('../../assets/images/forum/image_16.png'),
    ],
  },
  {
    id: 2,
    title: "Передержка  собак",
    images: [
      require('../../assets/images/forum/image_dog.png'),
    ],
  },
  {
    id: 3,
    title: "Выбираем витамины для кошек",
    images: [
      require('../../assets/images/forum/image_17.png'),
      require('../../assets/images/forum/image_16.png'),
    ],
  },
]

export default function Home() {
  const myPetCardMemo = useMemo(() => <MyPetCard />, [])

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <View style={styles.homePageNewsItem}>
      <View style={styles.homePageNewsItemImageContainer}>
        <Image source={require('../../assets/images/profile.png')} style={styles.homePageNewsItemImage} />
        <Text style={styles.homePageNewsItemTitle}>{item.title}</Text>
      </View>
      <Text style={styles.homePageNewsItemDescription}>{item.description}</Text>
      <TouchableHighlight style={styles.homePageNewsItemButton}>
        <Text style={styles.homePageNewsItemButtonText}>открыть</Text>
      </TouchableHighlight>
    </View>
  )

  const renderForumItem = ({ item }: { item: ForumItem }) => (
    <View style={styles.homePageForumContainerItem}>
      <Text style={styles.homePageForumContainerItemTitle}>{item.title}</Text>

      <View style={styles.homePageForumContainerItemImages}>
        {item.images.map((image, index) => (
          <Image source={image} key={index} />
        ))}
      </View>
    </View>
  )

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={news}
          renderItem={renderNewsItem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ gap: 16 }}
          ListHeaderComponent={() => (
            <>
              <View style={styles.profileContainer}>
                <ProfileHeader />

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

              <View>
                <MyPetCard />
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

              <View>
                <Text style={styles.homePageTitles}>Объявления</Text>
              </View>
            </>
          )}

          ListFooterComponent={() => (
            <>
              <TouchableHighlight
                style={styles.homePageMoreAnnouncements}>
                <Text style={styles.homePageMoreAnnouncementsText}>Больше объявлений</Text>

              </TouchableHighlight>

              <View style={styles.homePageForum}>
                <Text style={styles.homePageTitles}>Полезные статьи из форума </Text>
                <View>
                  <FlatList
                    data={forum}
                    renderItem={renderForumItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            </>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
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
  },
  profileSearchInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    color: "#7B7B7B",
    backgroundColor: "#FFFFFF",
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
  },
  homePageNewsItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    marginBottom: 16,
    flexShrink: 1,
    width: "48%",
  },
  homePageNewsItemImageContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginBottom: 10,
  },
  homePageNewsItemImage: {
    width: 33,
    height: 33,
    borderRadius: 50,
  },
  homePageNewsItemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#383838",
  },
  homePageNewsItemDescription: {
    fontSize: 12,
    color: "#383838",
  },
  homePageNewsItemButton: {
    marginTop: "auto",
  },
  homePageNewsItemButtonText: {
    fontSize: 12,
    color: "#192639",
    textAlign: "right",
    textDecorationLine: "underline",
  },
  homePageMoreAnnouncements: {
    backgroundColor: "#192639",
    padding: 14,
    borderRadius: 10,
    marginHorizontal: "auto",
  },
  homePageMoreAnnouncementsText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  homePageForum: {
    marginBottom: 28,
    marginTop: 28,
  },
  homePageForumContainerItem: {
    backgroundColor: "#192639",
    padding: 14,
    borderRadius: 4,
    marginRight: 6,
    maxWidth: 175,
  },
  homePageForumContainerItemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  homePageForumContainerItemImages: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 0,
    justifyContent: "flex-end",
    marginTop: "auto",
  },
});