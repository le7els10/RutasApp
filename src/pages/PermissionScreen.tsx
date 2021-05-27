import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import BlackBtn from '../components/BlackBtn';
import {PermissionContext} from '../context/PermissionContext';

const PermissionScreen = () => {
  const {askLocationPermission, permissions, checkLocationPermission} =
    useContext(PermissionContext);

  return (
    <View style={styles.container}>
      <BlackBtn title="Permisos" OnPress={askLocationPermission} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PermissionScreen;
