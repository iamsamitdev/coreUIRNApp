import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import GreetingScreen from './src/screens/GreetingScreen'
import CounterScreen from './src/screens/CounterScreen';
import SafeAreaScreen from './src/screens/SafeAreaScreen';
import PlatformOS from './src/screens/PlatformOS';
import Comment from './src/screens/comments/Comment';

const App = () => {
  // return <HomeScreen />
  // return <GreetingScreen />
  // return <CounterScreen />
  // return <SafeAreaScreen />
  // return <PlatformOS />
  return <Comment />
}

export default App
