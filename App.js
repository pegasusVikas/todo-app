import React,{useState} from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View ,FlatList, ScrollView, TextInput, Button } from 'react-native';
import uuid from 'uuid-random'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  const [goals,setGoals]=useState([]);
  const [inputModal,setInputModal]=useState(false);

  //Add Goal
  const onClick=(goal)=>{
    var key=uuid().toString()
    setGoals(()=>[...goals,{item:goal,key:uuid()}]);
    setInputModal(()=>false)
  }

  //Delete Goal
  const onDelete=(goalIndex)=>{
    console.log("henlo")
    //statemangment passes the getter as para, return object is the value to be set
    setGoals(currentGoal=>{return currentGoal.filter(({key})=>{return key!==goalIndex;})})
  }

  const AddGoal=()=>{
    setInputModal(()=>true)
  }

  const cancelGoal=()=>{
    setInputModal(()=>false)
  }

  return (
    <View style={styles.container}>
      <GoalInput visible={inputModal} onClick={onClick} cancel={cancelGoal}/>
      <Button title="Add Goal" onPress={()=>{AddGoal()}}/>
      <FlatList
      data={goals}
      renderItem={({item})=>{
        console.log(uuid().toString())
        return <GoalItem item={item.item} index={item.key} onPress={onDelete}/>
      }}
      />
      </View>
                             
  );
}
// conslog those render props (renderItem and  renderSectionHeader)
const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop:Constants.statusBarHeight,
   padding:10,
  //flexDirection:'column',
  // justifyContent:'flex-end',
  // alignItems:'stretch',
  //backgroundColor:'black',
  // flexWrap:'wrap',
  //alignContent:'stretch'
  },
});
