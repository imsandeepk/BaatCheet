

// @refresh state

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Homescreen from './Components/Homescreen';
import Chat from './Components/Chat';
const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Signin" component={Login} options={{headerShown:false}}  />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Homescreen" component={Homescreen}/>
        <Stack.Screen name="Chat" component={Chat}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

