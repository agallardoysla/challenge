import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../../navigator/RootStackParamList';
import SceneNames from '../../../navigator/SceneNames';
import {colors, fontSize, screenSize} from '../../../themes';
import usePhysicalActivies from '../../physicalActivities/hooks/usePhysicalActivities';
import {PhysicalActivy} from '../../physicalActivities/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

function PhysicalActivitiesCardItem({item}: {item: PhysicalActivy}) {
  const navigation = useNavigation<NavigationProps>();

  const goToPhysicalActivitiesSheet = () =>
    navigation.navigate(SceneNames.PhysicalActivities, {
      physicalActivity: item,
    });

  if (!item.actividadEjercicioId) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={goToPhysicalActivitiesSheet}
      style={{
        ...styles.card,
        backgroundColor: item?.color || colors.bluePrimary,
      }}>
      <Image
        source={{
          uri:
            item?.iconImage ||
            'https://www.iconsdb.com/icons/preview/purple/light-bulb-2-xxl.png',
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.rowCard}>
        <Text style={styles.textHour}>{item.title}</Text>
        <Text style={styles.textHour}>{item?.description?.slice(0, 17)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PhysicalActivitiesCardItem;

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.title,
    textAlign: 'center',
    width: '95%',
  },
  card: {
    width: '95%',
    height: screenSize.screenWidth * 0.25,
    marginTop: screenSize.screenWidth * 0.02,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: screenSize.screenWidth * 0.02,
  },
  rowCard: {
    width: '50%',
  },
  image: {
    marginLeft: 16,
    height: '90%',
    width: '20%',
  },
  textHour: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    marginLeft: 16,
    width: screenSize.screenWidth * 0.5,
    color: colors.whiteText,
  },
  textPts: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    marginLeft: 16,
    width: screenSize.screenWidth * 0.5,
    color: colors.whiteText,
  },
});
