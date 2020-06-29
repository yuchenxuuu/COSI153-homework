import React, { Component, useEffect, useState} from 'react'
import { Text, View, StyleSheet,Image, Button} from 'react-native'
import { useAsyncStorage } from '@react-native-community/async-storage';
function Home ({navigation}){
    const [value, setValue] = useState("");
    const handlePress = () => {
        navigation.navigate('Signup');
    }
    const { getItem } = useAsyncStorage('@storage_key');
    const readItemFromStorage = async () => {
        const item = await getItem();
        setValue(item);
        console.log(item);
    };
    useEffect(() => {
        readItemFromStorage();
      }, []);

    return (
        <View style={styles.container}>
            <Text> Home </Text>
            <Text>{value}</Text>
            <Button title="Go to Signup Page" onPress={handlePress} />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Home;
