import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SpaceCraft extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>space craft </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  