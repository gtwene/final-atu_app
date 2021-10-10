import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';



export default function SettingsScreen() {

  const state = {
    name: '',
    call: '',
    email: ''
  }

  function submit(){
    alert('Submitted !' , {name:'', call: '', email: ''})
  }
 
  return (  
    <View style={{ margin: 0, backgroundColor: 'black', flex: 1 }}>  
      <TextInput placeholder="Name"  
        placeholderTextColor="#fff"
        onChangeText ={(text) => {state.name = text}}
        style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, padding: 10, borderRadius: 20, paddingRight: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }} 
       />

       <TextInput placeholder="Call" 
        placeholderTextColor="#fff"
        onChangeText ={(text) => {state.call = text}}
        style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, padding: 10, borderRadius: 20, paddingRight: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}
       />

       <TextInput placeholder="Email"
        placeholderTextColor="#fff"
        onChangeText ={(text) => {state.email = text}}
        style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, padding: 10, borderRadius: 20, paddingRight: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}
       />

       <Button title ="Submit" onPress = {() => submit()} />
    </View>
  );
}

