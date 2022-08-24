import React from 'react';
import { Box, Center, Heading, FormControl, VStack, Input, Link, Button, Text, HStack, Image, KeyboardAvoidingView } from 'native-base';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';


export function SignUp(){
    return(
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} h={{ base: "400px", lg: "auto" }} flex={1}>    
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            Sign Up page
          </Box>
        </Center>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
};