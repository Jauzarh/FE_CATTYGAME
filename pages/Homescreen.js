import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { CheckBox } from '@rneui/themed';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import gambarback from '../assets/awalan.png'
import arrowback from '../assets/backbutton.png'
import search from '../assets/search.png'
import epep from '../assets/epep.png'
import emel from '../assets/ml.png'
import pabaji from '../assets/pubg.png'



// or any files within the Snack Jauza Rasyiq



export default function App({navigation}) {
    const [text, onChangeText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);
   

  return (
   <ImageBackground source={gambarback} style={styles.imgbg}>
    <View style={styles.wadahtext}>
        <Text style={{fontSize: 38,
    fontWeight: 'bold',
    fontFamily: 'poopins',
    textAlign: 'center',
    marginTop: -100,
    color: 'white'
        }}>
        DISCOVER
        </Text>
          <Text style={{fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'poopins',
    width: 230,
    marginTop: 10,
    marginLeft: 115,
    justifyContent: 'center',
    color: 'white'
        }}>
       PC & Mobile Game
        </Text>
        <TextInput
          style={styles.homeserc}
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
          placeholder='Search'
        />
    </View>
    <View>
        <TouchableOpacity style={styles.btnlogin}
          onPress={() => { navigation.navigate('Home') }}>
          <Image source={epep} style={styles.gambarbutton}/>
          <Text style={{ textAlign: 'center', color: '#000000', fontSize: 23,fontWeight:         'bold', marginTop: -52, }}>Free Fire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnlogin}
          onPress={() => { navigation.navigate('Home') }}>
          <Image source={emel} style={styles.gambarbutton}/>
          <Text style={{ textAlign: 'center', color: '#000000', fontSize: 23,fontWeight:         'bold', marginTop: -52, }}>Mobile Legend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnlogin}
          onPress={() => { navigation.navigate('Home') }}>
          <Image source={pabaji} style={styles.gambarbutton}/>
          <Text style={{ textAlign: 'center', color: '#000000', fontSize: 23,fontWeight:         'bold', marginTop: -52, }}>PUBG Mobile</Text>
        </TouchableOpacity>
    </View>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
imgbg: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
wadahback: {
  position: 'fixed',
  marginTop: -100,
  marginRight: 300
},
button3: {
  backgroundColor: 'transparent',
  width: 80,
  marginTop: 5,
  height: 70,
  borderRadius: 10
},
homeserc: {
  height: 55,
  width: 380,
  marginTop: 40,
  borderRadius: 32,
  padding: 10,
  justifyContent: 'center',
  backgroundColor: 'white'
},
imageserc: {
  marginTop: -30
},
btnlogin: {
  backgroundColor:  'linear-gradient(269.92deg, rgba(255, 255, 255, 0.5) 99.94%, rgba(255, 255, 255, 0.5) 201.02%)',
  width: 380,
  marginTop: 50,
  height: 100,
  borderRadius: 10
},
gambarbutton: {
  marginLeft: 22,
  width: 75,
  height: 75,
  marginTop: 12
}

});
