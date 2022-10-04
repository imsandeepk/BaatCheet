import { FlatList, StyleSheet, Text, View,Image, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect,useState,useLayoutEffect } from 'react'
import {app} from "../firebase"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { getAuth, signOut ,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

import { getFirestore,collection, getDocs } from "firebase/firestore";
import { SafeAreaView } from 'react-native-safe-area-context';

const Homescreen = ({navigation}) => {
  const signout=()=>{
    const auth = getAuth(app)
    auth.signOut()
    navigation.replace("Signin")
  }
  useLayoutEffect(() => {
    navigation.setOptions({title:"Baat Cheet",headerStyle:{backgroundColor:"#ffffff"},headerRight:()=><View><TouchableOpacity onPress={signout}><FontAwesome name='sign-out' size={30} color="#7FBCD2"/></TouchableOpacity></View>,headerLeft:()=>false})

  }, [])
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
    <View style={{flexDirection:'row',flex:1,backgroundColor:"#FFEEAF",height:Dimensions.get("screen").height/14,borderRadius:5,borderBottomWidth:3,borderBottomColor:"#000000"}}>
      
    <Image style={styles.dp} source={require("../assets/user.png")}  />
    
    <Text style={{color:"#000000",fontSize:24, alignSelf:'center',marginLeft:20}}>
      {item.name}
    </Text>
    
    </View>
    </TouchableOpacity>

  )
  
  return (
    <View style={styles.screen}>
      <View style={styles.search}>
      <TextInput  placeholder='Search' ></TextInput>
      <TouchableOpacity>
        <FontAwesome name='search' size={25} style={{alignSelf:'center'}}/>
        
      </TouchableOpacity>

      </View>
      
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

    },
    search:{
      marginTop:1,
      marginBottom:10,
      height:50,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"space-between",
      width:Dimensions.get("screen").width,
      borderWidth:1.5,
      borderRadius:10,
      backgroundColor:'lightgrey',
      borderColor:"black",
    }
    
})