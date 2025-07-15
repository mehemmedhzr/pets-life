import React, { useState } from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";

const styles = {
  profileMyPet: {
    marginTop: 12,
    marginBottom: 28,
  },
  homePageTitles: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    color: '#383838',
    marginBottom: 16,
  },
  profileMyPetContainer: {
    padding: 8,
    backgroundColor: '#FEE3AA',
    borderRadius: 20,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 12,
  },
  profileMyPetContainerInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  profileMyPetContainerImageText: {
    fontSize: 12,
    fontWeight: 'bold' as const,
    color: '#383838',
    marginBottom: 8,
  },
  profileMyPetContainerInfoImage: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
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
    fontWeight: 'bold' as const,
    color: '#383838',
  },
  profileMyPetContainerInfoImageTextItemText: {
    fontSize: 10,
    fontStyle: 'italic' as const,
    color: '#383838',
  },
  profileMyPetContainerInfoRight: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexShrink: 1,
  },
  profileMyPetContainerInfoName: {
    fontSize: 14,
    color: '#192639',
    marginBottom: 16,
  },
  profileMyPetContainerInfoButtonContainer: {
    backgroundColor: '#192639',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 6,
    textAlign: 'center' as const,
  },
  profileMyPetContainerInfoButton: {
    fontSize: 14,
    fontWeight: 'bold' as const,
    color: '#FFFFFF',
    textAlign: 'center' as const,
  },
  profileMyPetContainerInfoRightWithPet: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexShrink: 1,
    alignItems: 'center' as const,
    flexGrow: 1,
  },
  profileMyPetContainerInfoButtonContainerEdit: {
    backgroundColor: '#192639',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 6,
    textAlign: 'center' as const,
    alignSelf: 'stretch' as const,
  },
};

export default React.memo(function MyPetCard() {
  const [isMyPet, setIsMyPet] = useState(false);
  console.log(2)

  return (
    <View style={styles.profileMyPet}>
      <Text style={styles.homePageTitles}>Мой питомец</Text>
      <View style={styles.profileMyPetContainer}>
        <View style={styles.profileMyPetContainerInfo}>
          <Text style={styles.profileMyPetContainerImageText}>Карточка питомца</Text>
          <View style={styles.profileMyPetContainerInfoImage}>
            <Image source={require('../assets/images/profile.png')} style={styles.profileMyPetContainerImage} />
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
                <Image source={require('../assets/images/cat_illustration.png')} style={styles.profileMyPetContainerImage} />
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
  );
}) 