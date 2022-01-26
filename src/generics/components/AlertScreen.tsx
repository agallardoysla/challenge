import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
} from 'react-native';
import {opacities} from '../themes/colors';

interface Props {
  isVisible: boolean;
  onOkPressed: () => void;
  message: string;
}

function AlertScreen({isVisible, onOkPressed, message}: Props) {
  if (!isVisible) {
    return <View />;
  }
  return (
    <Modal onDismiss={() => {}} transparent={true} visible={isVisible}>
      <View style={styles.modal}>
        <View style={styles.flexContainer}>
          <View style={styles.messageSection}>
            <Text>{message}</Text>
          </View>
          <TouchableOpacity style={styles.pressMe} onPress={onOkPressed}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: opacities.light05,
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
  },

  flexContainer: {
    height: 150,
    width: 300,
    backgroundColor: 'white',
    marginBottom: 100,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: opacities.light09,
  },
  pressMe: {
    width: 300,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageSection: {
    minHeight: 80,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: opacities.light09,
    flex: 1,
    alignItems: 'center',
  },
});

export default AlertScreen;
