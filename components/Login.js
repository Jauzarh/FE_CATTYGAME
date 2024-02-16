import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { CheckBox } from '@rneui/themed';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import gambarback from '../assets/awalan.png'
import arrowback from '../assets/backbutton.png'


// or any files within the Snack Jauza Rasyiq



export default function App({navigation}) {
    const [text, onChangeText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);
   

  return (
   <ImageBackground source={gambarback} style={styles.imgbg}>
    <View style={styles.wadahback}>
    <TouchableOpacity 
      onPress={() => {navigation.navigate('Start')}}
      style={styles.button3}>
       <Image source={arrowback} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
    </View>
    <View>
        <Text style={{fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'poopins',
    textAlign: 'center',
    marginTop: 70,
    color: 'white'
        }}>
        LOGIN HERE
        </Text>
    </View>
    <View style={styles.wadahinputan}>
      <Text style={styles.emailtext}>
        Username
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Masukan Username'
      />
    </View>
    <View style={styles.wadahinputan}>
      <Text style={styles.passtext}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry={true}
        value={password}
        placeholder='Masukan Username'
      />
    </View>
    <View style={styles.wadahremember}>
      <Text style={{fontSize: 18,
    fontWeight: '700',
    fontFamily: 'poopins',
    position: 'absolute',
    marginTop: 40,
    marginLeft: -185,
    color: 'white'}}>
        Remember me?
      </Text>
      </View>
      <View style={styles.wadahchekbox}>
      <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           // Use ThemeProvider to make change for all checkbox
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="#A8FE3B"
         />
    </View>
    <View>
        <TouchableOpacity style={styles.btnlogin}
          onPress={() => { navigation.navigate('Home') }}>
          <Text style={{ textAlign: 'center', color: '#598324', fontSize: 25,fontWeight:         'bold', marginTop: 10, }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Register') }}
          style={styles.buttonn2}>
          <Text style={{ color: '#A8FE3B', fontSize: 17 }}>Dont Have an account?</Text>
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
  position: 'relative',
  marginTop: -180,
  marginRight: 320
},
button3: {
  backgroundColor: 'transparent',
  width: 70,
  marginTop: 5,
  height: 70,
  borderRadius: 10
},
input: {
  height: 55,
  width: 400,
  marginTop: 15,
  borderRadius: 22,
  padding: 10,
  backgroundColor: 'white'
},

emailtext: {
  fontSize: 18,
  fontWeight: '600',
  fontFamily: 'poopins',
  color: 'white',
  // textAlign: 'center',
  marginTop: 55,
  marginLeft: 10,
},
passtext: {
  fontSize: 18,
  fontWeight: '600',
  fontFamily: 'poopins',
  color: 'white',
  // textAlign: 'center',
  marginTop: 35,
  marginLeft: 10,
},
wadahremember: {
  marginLeft: -10
},
wadahchekbox: {
  marginLeft: -30,
  marginTop: 25
},
btnlogin: {
  backgroundColor: '#A8FE3B',
  width: 400,
  marginTop: 80,
  height: 60,
  borderRadius: 10
},
buttonn2: {
  marginTop: 20,
  marginLeft: 120
  
},

});
