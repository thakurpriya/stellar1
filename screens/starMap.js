import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class StartMap extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Start Map</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  