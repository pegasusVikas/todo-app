import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

const GoalItem=({item,onPress,index})=>{
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress.bind(this,index)}>
        <View style={styles.item}>
          <Text style={{fontSize:20}}>{item}</Text>
        </View>
      </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    item:{
        marginTop:5,
        backgroundColor:"grey",
        borderColor:"black",
        borderWidth:2,
        fontSize:20,
        padding:2,
      }
})
export default GoalItem;
