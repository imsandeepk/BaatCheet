import { FlatList, StyleSheet, Text, View,Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import {app} from "../firebase"

import { getFirestore,collection, getDocs } from "firebase/firestore";
import { SafeAreaView } from 'react-native-safe-area-context';

const Homescreen = ({navigation}) => {
  const [Users, setUsers] = useState(null)
  const db = getFirestore(app)
  const getuser= async()=>{
    const querysnap= await getDocs(collection(db,"name"));
    const allusers = querysnap.docs.map(doscsnap=>doscsnap.data())
    
    setUsers(allusers)
  }
  useEffect(()=>{
    getuser()
  },[])
  const oneuser = ({item})=>(
    <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
    <View style={{flexDirection:'row',flex:1,marginTop:10,backgroundColor:"#FFEEAF",height:Dimensions.get("screen").height/14,borderRadius:5,borderBottomWidth:3,borderBottomColor:"#000000"}}>
      
    <Image style={styles.dp} source={require("../assets/user.png")}  />
    
    <Text style={{color:"#000000",fontSize:24, alignSelf:'center',marginLeft:20}}>
      {item.name}
    </Text>
    
    </View>
    </TouchableOpacity>

  )
  
  return (
    <View style={styles.screen}>
      <FlatList
      data={Users}
      renderItem={oneuser}
      keyExtractor={(item)=>item.id}
      

      />
      
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#7FBCD2"
    },
    dp:{
      alignSelf:'center',
      height:50,
      width:50,
      borderRadius:25

    }
    
})