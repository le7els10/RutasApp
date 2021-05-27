import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermissionScreen from '../pages/PermissionScreen';
import {PermissionContext} from '../context/PermissionContext';
import LoadingScreen from '../pages/LoadingScreen';

const Stack = createStackNavigator();

export function Navigator() {
  const {permissions} = useContext(PermissionContext);

  // if (permissions.locationStatus === 'unavailable') {
  //   return <LoadingScreen />;
  // }

  return (
    <Stack.Navigator
      initialRouteName="Permission"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="Map" component={MapScreen} />
      ) : (
        <Stack.Screen name="Permission" component={PermissionScreen} />
      )}
    </Stack.Navigator>
  );
}
