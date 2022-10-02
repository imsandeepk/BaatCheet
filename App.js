// @refresh state

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Homescreen from './Components/Homescreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Signin" component={Login} options={{headerShown:false}}  />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Homescreen" component={Homescreen} options={{title:"Baat Cheet",headerStyle:{backgroundColor:"#ffffff"},headerRight:()=><EvilIcons name='user' size={50} color="#7FBCD2"/>,headerLeft:()=>false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


