import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContainerScreenWithstatusBar from '../../generics/components/ContainerScreenWithstatusBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigator/RootStackParamList';
import {fontFamily} from '../../themes';
import {RFPercentage} from 'react-native-responsive-fontsize';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: Props) {
  return (
    <ContainerScreenWithstatusBar>
      <View>
        <Text style={{fontFamily: fontFamily.arial, fontSize: RFPercentage(5)}}>
          asdfas
        </Text>
      </View>
    </ContainerScreenWithstatusBar>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
