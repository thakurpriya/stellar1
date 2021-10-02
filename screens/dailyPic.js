import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DailyPic extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>daily pic</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  