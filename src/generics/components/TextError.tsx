import React from 'react';
import {Text} from 'react-native';

type Props = {
  errorText: string;
};

const ErrorText = ({errorText}: Props) => {
  return <Text style={{color: 'red', fontSize: 11}}>{errorText}</Text>;
};

export default ErrorText;
