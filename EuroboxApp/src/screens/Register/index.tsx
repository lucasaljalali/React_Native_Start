import React, { useState} from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { Box, Center, Heading, FormControl, VStack, Input, Link, Button, Text, HStack, Image, KeyboardAvoidingView, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'

export function Register(){

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} h={{ base: "400px", lg: "auto" }} flex={1}>    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
          <HStack alignItems={'center'} space={3}>
              <Image source={require('../../../assets/logo.png')} size={70} alt={'Eurobox logo'}/>
                <VStack justifyContent={'center'}>
                  <Heading size='md' fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Sign Up
                  </Heading>
                  <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                    Let's register you!
                  </Heading>
                </VStack>  
            </HStack> 
            
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>First and Last name</FormControl.Label>
                <Input 
                  autoCorrect={false} 
                  textContentType={'name'} 
                  variant="rounded"
                  onChangeText={setName} 
                />
                <FormControl.ErrorMessage>invalid name</FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <FormControl.Label>Cellphone №</FormControl.Label>
                <Input 
                  autoCorrect={false} 
                  textContentType={'telephoneNumber'}   
                  variant="rounded"
                  onChangeText={setPhone} 
                />
                <FormControl.ErrorMessage>invalid cellphone</FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input 
                  autoCapitalize='none' 
                  autoCorrect={false} 
                  textContentType={'emailAddress'} 
                  variant="rounded"
                  onChangeText={setEmail} 
                />
                <FormControl.ErrorMessage>invalid e-mail</FormControl.ErrorMessage>
              </FormControl>
              
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                  type="password" 
                  variant="rounded"
                  onChangeText={setPassword}
                />
                <FormControl.ErrorMessage>invalid password</FormControl.ErrorMessage>
              </FormControl>
              
              <Button mt="2" colorScheme="warmGray" borderRadius={50} onPress={()=>console.log(email+' '+password)}>
                Register
              </Button>
              
              <HStack mt="6" justifyContent="center" alignItems='center'>
                <Text fontSize="sm" color="warmGray" _dark={{ color: "warmGray.200" }}>
                  Register with Google:{" "}
                </Text>
                <Icon as={Ionicons} name='logo-google' onPress={()=>console.log('Google')} color="blue.500" size={5} m={1}/>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};