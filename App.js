import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import loginScreen from './screens/loginScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#0077B5" },
  headerTitleStyle: { color: "white" },
  headertintColor: "white"
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{
            title: "Lets Build React App"
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
