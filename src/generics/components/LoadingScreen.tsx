import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import {opacities} from '../themes/colors';

interface Props {
  isVisible: boolean;
}

function LoadingScreen({isVisible}: Props) {
  if (!isVisible) {
    return <View />;
  }

  return (
    <Modal
      backdropColor={'white'}
      backdropOpacity={0.8}
      animationInTiming={250}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={isVisible}>
      <View style={styles.flexContainer} />
      <View style={styles.loadingContainer}>
        <Spinner
          size={35}
          type={Platform.OS === 'ios' ? 'Arc' : 'Circle'}
          color={opacities.light09}
          isVisible={isVisible}
        />
      </View>
      <View style={styles.flexContainer} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  flexContainer: {flex: 1},
});

export default LoadingScreen;
