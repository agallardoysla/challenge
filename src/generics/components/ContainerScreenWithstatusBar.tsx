import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {backgrounds} from '../themes/colors';

type Props = {
  children: ReactNode;
};

function ContainerScreenWithstatusBar({children}: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? backgrounds.dark : backgrounds.light,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.viewContainer}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgrounds.light,
  },
  viewContainer: {
    backgroundColor: backgrounds.light,
    flex: 1,
    width: '100%',
  },
});

export default ContainerScreenWithstatusBar;
