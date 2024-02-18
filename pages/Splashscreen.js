import React, { useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import imgsplash from '../assets/gambarsplash.png';

// or any files within the Snack Jauza Rasyiq

export default function App({ navigation }) {
  useEffect(() => {
    setTimeout (() => {
        navigation.replace('Start');
    }, 2000)
  })

  return (
        <ImageBackground
        style={styles.jozagans}
        source={imgsplash}
      ></ImageBackground>
    
  );
}

const styles = StyleSheet.create({
 
  jozagans: {
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
