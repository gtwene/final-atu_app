import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TextInput, Button, ScrollView, TouchableOpacity, Animated }  from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { NavigationContainer } from '@react-navigation/native';
import Chat from './screen/chatbot'
import SettingsScreen from './screen/Settings'
import DepartmentScreen from './screen/Departments';
import HomeScreen from './screen/Home'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({ 
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Map Of Korle-Bu') {
              iconName = focused
                ? 'ios-navigate' 
                : 'ios-navigate';
            } else if (route.name === 'Departments') { 
              iconName = focused ? 'ios-home-outline' : 'ios-home-outline';
            } else if (route.name === 'Settings') { 
              iconName = focused ? 'md-cog' : 'md-cog'; 
            } else if (route.name === 'Chat'){
              iconName = focused ? 'chatbubbles-outline' : 'chatbubbles-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',  
          tabBarInactiveTintColor: 'gray',
        })}
      > 
        <Tab.Screen name="Map Of Korle-Bu" component={HomeScreen} />
        <Tab.Screen name="Departments" component={DepartmentScreen}/>
        <Tab.Screen name="Chat"  component={Chat} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs /> 
    </NavigationContainer>
  );
}
