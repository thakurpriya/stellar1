
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DailyPic from './screens/dailypic';
import Home from './screens/home';
import SpaceCraft from './screens/spaceCraft';
import StarMap from './screens/starMap';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
  return (
    //<View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="DailyPic" component={DailyPic}/>
      <Stack.Screen name="SpaceCraft" component={SpaceCraft}/>
      <Stack.Screen name="StarMap" component={StarMap}/>
      
      </Stack.Navigator>
    </NavigationContainer>
     
    
    //</View>
  );}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
