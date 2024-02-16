import { Text, SafeAeSheet, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Getstart from './components/Getstart'
import Splash from './components/Splashscreen'
import Login from './components/Login'
import Register from './components/register'
import Home from './components/Homescreen'
// or 
import AssetExample from './components/AssetExample';
const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer 
   initialRouteName="Splash"
   >
   <Stack.Navigator screenOptions={{headerShown: false}}>
   {/* <Stack.Screen name="Splash" component={Splash}/>
   <Stack.Screen name="Start" component={Getstart}/> 
   <Stack.Screen name="Login" component={Login}/>
   <Stack.Screen name="Register" component={Register}/> */}
   <Stack.Screen name="Home" component={Home}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

