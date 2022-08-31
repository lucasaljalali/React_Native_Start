import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Box, Button, Center, KeyboardAvoidingView } from 'native-base';

import auth from '@react-native-firebase/auth';
import { BookTransferForm } from "../../../components/bookTransferInput";


export function Book({ navigation }) {

  const currentUser = auth().currentUser;

  function signOut(){
    auth().signOut()
    .then(navigation.navigate('SignIn'))
  };

  return (
    <>
      <BookTransferForm/>
      <Center>  
        <Button width='1/4' mt="2" colorScheme="warmGray" borderRadius={50} onPress={(signOut)}>
          Sign out
        </Button>
      </Center>
    </>  
  );
};