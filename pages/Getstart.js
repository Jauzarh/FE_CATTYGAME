import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import imgbg from '../assets/awalan.png';
import imgcoin from '../assets/coins.png';
// or any files within the Snack Jauza Rasyiq



export default function App({navigation}) {
    

  return (
      <ImageBackground
        style={styles.bgr}
        source={imgbg}>
        <View style={styles.wadahcoin}>
        <Image
        source={imgcoin}
        style
        />
        </View>
        <View style={styles.wadahtext}>
        <Text style={{fontSize: 38,
    fontWeight: 'bold',
    fontFamily: 'poopins',
    textAlign: 'center',
    marginTop: 40,
    color: 'white'
        }}>
        GAME ACCOUNT
        </Text>
        <Text style={{fontSize: 38,
    fontWeight: 'bold',
    fontFamily: 'poopins',
    textAlign: 'center',
    marginLeft: -210,
    color: 'white'
        }}>
        JOKI
        </Text>
          <Text style={{fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'poopins',
    width: 230,
    marginTop: 5,
    marginLeft: 5,
    color: 'white'
        }}>
       The most trusted account joki place
        </Text>
        </View>
        <View style={styles.wadahmbuh}>
          <TouchableOpacity 
      onPress={() => {navigation.navigate('Login')}}
      style={styles.buttoncrt}>
        <Text style={{textAlign: 'center', color: '#598324', fontSize: 25,fontWeight:         'bold', marginTop: 5,}}>Sign in</Text>
      </TouchableOpacity>
        </View>

      </ImageBackground>
  );
}

const styles = StyleSheet.create({

bgr: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},

wadahcoin: {
  marginRight: 220,
  marginTop: -50
},

wadahtext: {
  marginRight: 50,
  marginTop: -80
},
buttoncrt: {
     backgroundColor: '#A8FE3B',
    width: 310,
    marginTop: 30,
    marginRight: 30,
    height: 52,
    borderRadius: 10
},
});