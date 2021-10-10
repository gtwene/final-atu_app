import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TextInput, Button, ScrollView, TouchableOpacity, Animated }  from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { NavigationContainer } from '@react-navigation/native';


export default function HomeScreen() {


  const [pin, setPin] = React.useState ({
          latitude: 37.78825,
          longitude: -122.4324   
        })
         const [region, setRegion] = React.useState ({
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922, 
          longitudeDelta: 0.0421
        })

  return (
       <View style={{marginTop: 0, flex: 1}}>

      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails = {true}
        GooglePlacesSearchQuery={{
          rankby: "distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details); 
        setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        })
      }}
      query={{
        key: 'AIzaSyBBte1W10hmyyovvxYCh0vSqY672tEonMc',
        language: 'en',
        components: 'country:ghana',
        types: "establishment",
        radius: 1000,
        location: `${region.latitude}, ${region.longitude}`
      }}
      styles = {{
        container: {flex: 0, position: "absolute", width: "100%", zIndex: 1},
        listView: { backgroundColor: "white"}
      }}
    />

        <MapView 
          style={styles.map}  
          initialRegion={{
            latitude: 5.5360311892,
            longitude: -0.22311077422, 
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
      }}

      provider = "google"
     >
      <Marker coordinate = {{latitude: region.latitude, longitude: region.longitude}} />
      <Marker 
            coordinate = {{pin}} 
            draggable = {true}
            onDragStart = {(e) => {
            console.log("Drag Start", e.nativeEvent.coordinates)
          }}
          onDragEnd = {(e) => {
            setPin({
              latitude: e.nativeEvent.coordinates.latitude,
              longitude: e.nativeEvent.coordinates.longitude 
            })  
          }}
        >
          <Callout>
            <Text> This is Korle-Bu </Text>
          </Callout>
        </Marker>
        <Circle center ={pin} radius = {1000} />
     </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
 
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});


