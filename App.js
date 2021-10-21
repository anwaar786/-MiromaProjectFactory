import React from 'react'
import { View, Text } from 'react-native'
import ThingsAdd from './src/Screen/Views/ThingsAdd'
import ContextProvider from './context-provider'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import StackNavigation from './src/StackNavigation/StackNavigation'

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      
    </ContextProvider>
  )
}

export default App
