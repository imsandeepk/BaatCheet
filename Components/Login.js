import { StyleSheet, Text, TextInput, View,Dimensions, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {app} from "../firebase"
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";



const Login = ({navigation}) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Loading, setLoading] = useState(false)
    if(Loading){
      return <ActivityIndicator style={{flex:1,alignSelf:'center'}} size="large" color="#00ff00" />

    }
    

   const auth = getAuth(app);

    useEffect(()=>{
      setLoading(true)
      const unsub=onAuthStateChanged(auth,(user)=>{
        if(user){
          navigation.navigate("Homescreen")
        }
      });
      setLoading(false);
       return unsub
       
    },[])
    const login =()=>{
      setLoading(true)
      signInWithEmailAndPassword(auth,Email,Password).then(userCredentials=>{
        const user = userCredentials.user;
        navigation.navigate("Homescreen")
      }
    )
    .catch(error=>alert(error.message))
    setLoading(false);
    
    }
    
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <View>
    <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center',color:"#ffffff",}}>  Baat Cheet</Text>
        <Image style={styles.img} source={require("../assets/icon.png")} />
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.inputContainer} onChangeText={(text)=>setEmail(text)}  placeholder='Email'></TextInput>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.inputContainer} onChangeText={(text)=>setPassword(text)}  placeholder='Password' secureTextEntry ></TextInput>
      <TouchableOpacity onPress={login} style={styles.btn} ><Text>Sign In</Text></TouchableOpacity>
      <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
        <Text >Don't have an account yet?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Signup")} ><Text style={{fontWeight:'bold'}}>Signup</Text></TouchableOpacity>
      </View>
      
      </View>
    </View>
    </SafeAreaView>
    
  )
}

export default Login

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