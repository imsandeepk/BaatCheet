import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Homescreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Homescreen</Text>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#7FBCD2"
    }
})