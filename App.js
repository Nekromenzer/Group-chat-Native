import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import loginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register';
import Home from './screens/Home';
import AddChat from './screens/AddChat'
import ChatScreen from './screens/ChatScreen'

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#0077B5" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddChat" component={AddChat} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
