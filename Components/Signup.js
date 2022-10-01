import { StyleSheet, Text, TextInput, View,Dimensions, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Signup = ({navigation}) => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const chat=()=>{

    }
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
      <TouchableOpacity style={styles.btn} ><Text>Signup</Text></TouchableOpacity>
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
