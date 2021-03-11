import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import loginScreen from './screens/loginScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <createStackNavigator/>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          title:"Lets Build React App"
        }}
        name="login" component={loginScreen} />
        {/* <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>dsfsdf</Text>
        </View> */}
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
