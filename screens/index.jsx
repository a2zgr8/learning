import { StyleSheet,View, Text, Button } from 'react-native'
import Club from '../components/club.jsx'
import React from 'react'

export function TestPage({navigation}){
  return (
    <View>
      <Club
        clubName={"Club1"}
        location={"21 example way"}
      />
      <Club
        clubName={"Club2"}
        location={"35 ATlantic"}/>
    </View>
  )
}