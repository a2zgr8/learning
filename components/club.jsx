
import { StyleSheet,View, Text, Button } from 'react-native'
import React from 'react'
export default function Club({clubName,location}){
   return (
    <View style={styles.main}>
        <Text>{clubName}</Text>
        <Text>{location}</Text>
    </View>
   ) 
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#554',
        borderRadius: 10,
        padding: 10,
        minWidth: 'auto',
    },
})
