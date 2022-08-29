import React, { useReducer } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Box, Button, Center, KeyboardAvoidingView } from 'native-base';
import auth from '@react-native-firebase/auth';


export function Home({navigation}) {

  function signOut(){
    auth().signOut()
    .then(navigation.navigate('SignIn'))
  };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      h={{ base: "400px", lg: "auto" }}
      flex={1}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            Home Page of 
          </Box>
          <Button mt="2" colorScheme="warmGray" borderRadius={50} onPress={signOut}>
            Sign out
          </Button>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
