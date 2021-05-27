import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  title: string;
  OnPress: () => void;
  sty: StyleProp<ViewStyle>;
}
const BlackBtn = ({title, OnPress, sty}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={OnPress}
      style={{...style.blackButton, ...(sty as any)}}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  blackButton: {
    height: 50,
    width: 200,
    backgroundColor: '#000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.27,
    elevation: 6,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default BlackBtn;
