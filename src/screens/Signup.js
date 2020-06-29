import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, View, Button,TextInput, Alert } from 'react-native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { useForm } from "react-hook-form";

function Signup () {
  
  const {register, handleSubmit, setValue} = useForm();

  //const [password, setPassword] =  useState('');
  const { getItem, setItem } = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    
    console.log(item);
    
  };

  const onSubmit = data => {
      console.log(data);
      Alert.alert("Signup", data);
      writeItemToStorage(data);
  };

  const writeItemToStorage = async (data) => {
    await setItem(JSON.stringify(data));
    console.log(JSON.stringify(data));
   
  };

  useEffect(() => {
    readItemFromStorage();
    register("name");
    register("email");
  }, [register]);

return (
        <View style={styles.container}>
            <Text style={{fontSize:24}}>This is a sign up page</Text>
           <Text>Name:</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type your user name here!"
                onChangeText={text => setValue('name',text)}
                defaultValue={""}
            />
            <Text>Email:</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type your email here!"
                onChangeText={text => setValue('email',text)}
                defaultValue={""}
            />
            <Button onPress={handleSubmit(onSubmit)} title="Signup" />
        </View>
    );
  
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {

    },
    formtitle: {

    }
});
export default Signup;