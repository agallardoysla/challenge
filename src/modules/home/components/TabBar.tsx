import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {screenSize} from '../../../themes';

type tabButtom = {
  name: string;
  title: string;
};

const tabButtonInfo = [
  {name: 'list', title: 'Actividades'},
  {name: 'tachometer', title: 'Asistente'},
  {name: 'plane', title: 'Experiencias'},
  {name: 'users', title: 'Red'},
];

const TabBar = () => {
  const [pressed, setPressed] = useState('');

  const tabButtom = ({name, title}: tabButtom) => {
    return (
      <TouchableOpacity
        key={name}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setPressed(name)}>
        <FontAwesome
          name={name}
          size={screenSize.screenWidth * 0.07}
          color={name === pressed ? 'black' : 'gray'}
        />
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        alignItems: 'center',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-around',
        marginHorizontal: 10,
      }}>
      {tabButtonInfo.map(item =>
        tabButtom({name: item.name, title: item.title}),
      )}
    </View>
  );
};

export default TabBar;
