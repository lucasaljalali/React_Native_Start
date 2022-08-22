import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderForm';
import * as yup from 'yup';
import { string } from 'yup/lib/locale';

const schema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required('Inform the service name'),
  user: yup.string().required('Inform your username or e-mail'),
  password: yup.string().required('Inform your password'),
});

export function Form() {
  
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  // create/declare AsyncStorage getItem and setItem for this specific data collection
  const { getItem, setItem } = useAsyncStorage("@passregister:passwords");

  async function handleNew(){
    // will try to execute everything below
    try{
    // create/declare id as a random id created by the package uuid
    const id = uuid.v4();
    // create/declare new data with the states created by inputs 
    const newData = {id, name, user, password,};
    // validate the form
    await schema.validate(newData, { abortEarly: false });
    // gets all previous data (commented is what i can erase by using useAsyncStorage instead of just AsyncStorage)
    const response = await /*AsyncStorage.*/getItem(/*"@passregister:passwords"*/);
    const previousData = response ? JSON.parse(response) : [];
    // create/declare a new array adding new data to previous data 
    const data = [...previousData, newData];
    // gets the new array and push to local storage (AsyncStorage)
    await /*AsyncStorage.*/setItem(/*'@passregister:passwords',*/ JSON.stringify(data));
    // call the success message using package Toast
    Toast.show({type:'success', text1:'Successfully registered!'});
    // if gets a error...
    }catch(error: any){
      const listOfErrors = error.errors
    //shows errors in console  
    console.log(listOfErrors);
    // call the error message using package Toast 
      Toast.show({type:'error', text1: listOfErrors[0]});
      }
  };




  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <ScrollView>

          <HeaderForm />

          <View style={styles.form}>
            <Input
              label="Service name "
              onChangeText={setName}
            />
            <Input
              label="User or e-mail"
              autoCapitalize="none"
              onChangeText={setUser}
            />
            <Input
              label="Password"
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.footer}>
            <Button
              title="Save"
              onPress={handleNew}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}