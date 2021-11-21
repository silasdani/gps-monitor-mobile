import React from 'react';
import { View } from 'react-native';

const Spacer = (props) => {
  const style = {height: props.height, width: props.width};
  return <View style={style} />;
};

export default Spacer;