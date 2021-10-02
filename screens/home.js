import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, } from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.head}> Home </Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>button1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>button2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>button3</Text></TouchableOpacity>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    head:{
        fontSize: 50,
        color: 'white',
        
    },
    button:{backgroundColor:'white',
            width: 100,
            height: 50},
    buttonText:{color:'red'}
  });
  