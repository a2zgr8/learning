import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Nav } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestPage} from "./screens/index.jsx"
import { Main } from './screens/main.jsx';
import Club from './components/club.jsx'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="test" component={TestPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}