// In App.js in a new project

import React, {useState, useEffect} from 'react';
import { View, Text , ImageBackground, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import color from './../config/color';
  
function VokabelScreen() {

  const DATA = [{"id":1,"name":"Michael Schulze"},{"id":2,"name":"Peter Muffay"}];


    const [state, setState] = useState([]);

    useEffect(()=> {
      fetch('http://127.0.0.1:3000/users').then(
        res => setState(res.data)
      )
    })

    return (
    <ImageBackground
      resizeMode="cover"
      source={require('./../assets/Background.png')}
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <View style={{ backgroundColor: color.primary, padding: 10, margin: 10 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.id}</Text>
              <Text style={{ color: '#fff' }}>{item.name}</Text>
            </View>
          }
        />
      </SafeAreaView>
    </ImageBackground>  
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


export default VokabelScreen;