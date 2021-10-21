import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ThingsAdd from '../Screen/Views/ThingsAdd';
import SelectedThings from '../Screen/Views/SelectedThings';


const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="ThingsAdd"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen
        name="ThingsAdd"
        component={ThingsAdd}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectedThings"
        component={SelectedThings}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
