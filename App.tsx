import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/modules/home/HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SceneNames from './src/navigator/SceneNames';
import LoadingScreen from './src/generics/components/LoadingScreen';
import {useRequestContext} from './src/context/RequestContext';
import AlertScreen from './src/generics/components/AlertScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

FontAwesome.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();
Feather.loadFont();
Ionicons.loadFont();

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => (
//   <Drawer.Navigator initialRouteName={SceneNames.Home}>
//     <Drawer.Screen name={SceneNames.Home} component={HomeScreen} />
//   </Drawer.Navigator>
// );

const App = () => {
  const [{loading, error}, {errorHandler}] = useRequestContext();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={SceneNames.Home}>
          <Stack.Screen name={SceneNames.Home} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <LoadingScreen isVisible={loading} />
      {!loading && (
        <AlertScreen
          isVisible={error ? true : false}
          message={error}
          onOkPressed={() => errorHandler('')}
        />
      )} */}
    </>
  );
};

export default App;
