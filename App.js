import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, FlatList, ImageBackground} from 'react-native';
import colors from './config/color';
import color from './config/color';
import React, { useState, useEffect, Component, Stack, Navigator } from 'react';
//import * as React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Component } from 'react/cjs/react.production.min';

import VokabelScreen from './src/VokabelScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Settings', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Home', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Settings!</Text>
    //   <VokabelScreen/>
    // </View>

    <VokabelScreen/>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Vokabeln" component={VokabelScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
  


export default function App () {

  const Stack = createNativeStackNavigator();


  const [state, setState]=useState([]);


  useEffect(()=> {
    fetch('http://localhost:3000/users').then(
      res => setState(res.data)
    )
  })

  const DATA = [{"id":1,"name":"Michael Schulze"},{"id":2,"name":"Peter Muffay"}];


  console.log(state);



  return (
    // <ImageBackground
    //   resizeMode="cover"
    //   source={require('./assets/Background.png')}
    //   style={styles.image}
    // >
      <SafeAreaView style={styles.container}>
        {/* <FlatList
          data={state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <View style={{ backgroundColor: color.primary, padding: 10, margin: 10 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.id}</Text>
              <Text style={{ color: '#fff' }}>{item.name}</Text>
            </View>
          }
        /> */}


    
      <NavigationContainer>
            <MyTabs/>
          </NavigationContainer>

    </SafeAreaView>
  );
}

const buttonColor = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
