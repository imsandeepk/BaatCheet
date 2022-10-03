import { StyleSheet, Text, TextInput, View,Dimensions, SafeAreaView, TouchableOpacity,Image,StatusBar } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {app} from "../firebase"
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { getFirestore,setDoc,doc, addDoc,collection } from "firebase/firestore";




const Signup = ({navigation}) => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const auth = getAuth(app)
    const db = getFirestore(app)
    const create= async ()=>{
      await createUserWithEmailAndPassword(auth,Email,Password).then(
        (userCredentials)=>{
          const user = userCredentials.user;
          
          updateProfile(auth.currentUser,{
            displayName: Name
          })
        }
        
      )
      .catch(error=>alert(error.message));
      try{
      await addDoc(collection(db,"name"),{
        email:Email,
        name:Name,
        password:Password
        
      })}
      catch (e) {
        console.error("Error adding document: ", e);
    
    }}



  return (
    
    <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>
    
    <View>
    <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center',color:"#ffffff",}}>  Baat Cheet</Text>
        <Image style={styles.img} source={require("../assets/icon.png")} />
        <Text style={{fontSize:22,fontWeight:'bold',alignSelf:'center',color:"#ffffff",marginBottom:4}}> Welcome {Name}</Text>
        
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.inputContainer} placeholder='Name' onChangeText={(text)=>setName(text)} ></TextInput>
      
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.inputContainer} onChangeText={(text)=>setEmail(text)}  placeholder='Email'></TextInput>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.inputContainer}onChangeText={(text)=>setPassword(text)}  placeholder='Password' secureTextEntry ></TextInput>
      <TouchableOpacity onPress={create} style={styles.btn} ><Text>Signup</Text></TouchableOpacity>
      <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
        <Text >Already have an account</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Signin")} ><Text style={{fontWeight:'bold'}}>SignIn</Text></TouchableOpacity>
      </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#7FBCD2"
    },
    inputContainer: {
        backgroundColor:"#ffffff",
        height: 45,
        width:Dimensions.get("screen").width/1.05, 
        marginTop: 5,
        marginRight:8,
        marginLeft:8,
        paddingLeft: 15,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 19
      },
      text:{
        marginTop:10,
        marginLeft:10,
        fontSize:18
      },
      btn:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        marginTop:15,
        height:30,
        width:Dimensions.get("screen").width/2,
        backgroundColor: "#FFEEAF",
        borderRadius:6,
        borderColor:"#000000",
        borderWidth:0.20,
        
    },
    img:{
        height:200,
        width:200,
        alignSelf:'center'
    }

})

