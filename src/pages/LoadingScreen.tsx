import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={50} color="#000" />
      <Text>Cargando...</Text>
    </View>
  );
};

export default LoadingScreen;
