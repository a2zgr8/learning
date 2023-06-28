import { StyleSheet,View, Text, TextInput, Button } from 'react-native'
import Club from '../components/club.jsx'
import React, { useState } from 'react'

export function Main({navigation}){
    const [searchText, setSearchText] = useState('');
    const handleSearch = (text) => {
        setSearchText(text);
    }
    return(
        <View>
            <TextInput
                placeholder='Search...'
                value={searchText}
                onChangeText={handleSearch}
            />

            <Text>{searchText}</Text>
        </View>
    )
}