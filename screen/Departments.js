import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import Constants from 'expo-constants';


export default function DepartmentScreen() {


  return (
 
  <ScrollView style= {{ flex: 1, backgroundColor: 'black' , paddingTop: 10 }}>
   <View style={{  flexDirection: 'column' }}>   

 
    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
      <TouchableOpacity  onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Department+Of+Surgery/@5.537344,-0.2292248,17z/data=!4m21!1m15!4m14!1m6!1m2!1s0xfdf97ef434ced8d:0xeebdfe1537269da!2sDepartment+Of+Surgery,+Harley+St,+Accra!2m2!1d-0.2278607!2d5.5385093!1m6!1m2!1s0xfdf9734552fc899:0x73b96e60d0bdae26!2skorle+bu+teaching+hospital!2m2!1d-0.2264091!2d5.536607!3m4!1s0xfdf97ef434ced8d:0xeebdfe1537269da!8m2!3d5.5385093!4d-0.2278607');
            }}>
        <Image 
            style={{
              flex: 1,
              height: 100,
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/host1.jpg')}
           
        /> 
        <Text
            style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }} 
            >
            Surgery
          </Text>
      </TouchableOpacity>  

       <TouchableOpacity  onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Department+Of+Surgery/@5.537344,-0.2292248,17z/data=!4m21!1m15!4m14!1m6!1m2!1s0xfdf97ef434ced8d:0xeebdfe1537269da!2sDepartment+Of+Surgery,+Harley+St,+Accra!2m2!1d-0.2278607!2d5.5385093!1m6!1m2!1s0xfdf9734552fc899:0x73b96e60d0bdae26!2skorle+bu+teaching+hospital!2m2!1d-0.2264091!2d5.536607!3m4!1s0xfdf97ef434ced8d:0xeebdfe1537269da!8m2!3d5.5385093!4d-0.2278607');
            }}>
        <Image 
            style={{
              flex: 1,
              height: 100,
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/host2.jpg')}
           
        /> 
        <Text
            style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }} 
            >
            Lab
          </Text>
      </TouchableOpacity> 

      <View>
        <Image 
            style={{ 
              flex: 1,
              height: 100, 
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10 
            }} 
            source={require('../assets/host2.jpg')} 
        />
        <Text
            style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }} 
            >
            Lab
          </Text>
      </View>
    </View>


    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
      <View>
        <Image 
            style={{
              flex: 1,
              height: 100,
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/host3.jpg')}
        /> 
         <Text
            style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }} 
            onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/AlphaDelta+Pharmacy+-+Korle+Bu/@5.537408,-0.2292248,17z/data=!4m9!1m2!2m1!1spharmacy+in+Korle+bu+,+Accra!3m5!1s0xfdf973409c7fac9:0xc2f8b149d4ef33f7!8m2!3d5.5355958!4d-0.2284022!15sChxwaGFybWFjeSBpbiBLb3JsZSBidSAsIEFjY3JhWhwiGnBoYXJtYWN5IGluIGtvcmxlIGJ1IGFjY3JhkgEIcGhhcm1hY3k');
            }}>
            Pharmacy
          </Text>
      </View>

      <View>
        <Image 
            style={{ 
              flex: 1,
              height: 100, 
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/host4.jpg')} 
        />
        <Text
          style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }} 
        >Physiotherapy</Text>
      </View>
    </View>

    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
      <View>
        <Image 
            style={{
              flex: 1,
              height: 100,
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/korle1.jpg')}
        /> 
        <Text
          style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white'}}
        >Eye Care</Text> 
      </View>

      <View>
        <Image 
            style={{ 
              flex: 1,
              height: 100, 
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/korle3.jpg')} 
        />
        <Text
          style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }} 
        >Child Health</Text>
      </View>
    </View>

    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
      <View>
        <Image 
            style={{
              flex: 1,
              height: 100,
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/Korle-Bu-Transplant-2.jpg')}
        /> 
        <Text
          style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white'}}
        >Dental</Text> 
      </View>

      <View>
        <Image 
            style={{ 
              flex: 1,
              height: 100, 
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/Radiate.jpg')} 
        />
        <Text
          style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }} 
        >Radiology</Text>
      </View>
    </View>

    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
      <View>
        <Image 
            style={{
              flex: 1,
              height: 100,
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10
            }} 
            source={require('../assets/host1.jpg')}
        /> 
        <Text
          style ={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white'}}
        >Physiotherapy</Text> 
      </View>

      <TouchableOpacity>
        <Image 
            style={{ 
              flex: 1,
              height: 100, 
              width: 180,
              marginTop: 10,
              marginRight: 0,
              marginLeft: 10,
              borderRadius: 10  
            }} 
            source={require('../assets/host2.jpg')} 
        />
        <Text 
          style ={{ marginTop: 10, marginRight: 10, fontWeight: 'bold', color: 'white' }} 
        >Dietherapy</Text>
      </TouchableOpacity>
    </View>
  
  </View>
  </ScrollView>

  );
}
