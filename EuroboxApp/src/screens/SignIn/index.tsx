import React, { useState} from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { Box, Center, Heading, FormControl, VStack, Input, Link, Button, Text, HStack, Image, KeyboardAvoidingView } from 'native-base';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

const schema = yup.object().shape({
  email: yup.string().required('Inform your e-mail'),
  password: yup.string().required('Inform your password'),
});

export function SignIn(){
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    //setLoading(true);
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => Alert.alert('Successfully Logged!'))
    .catch((error) => Alert.alert('Erro', error.message))
    //.finally(() =>  setLoading(false));
    // ai tem que logar na home page com o usuario cadastrado
  };

  return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} h={{ base: "400px", lg: "auto" }} flex={1}>    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
          <HStack alignItems={'center'} space={3}>
              <Image source={require('../../../assets/logo.png')} size={70} alt={'Eurobox logo'}/>
                <VStack justifyContent={'center'}>
                  <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Welcome
                  </Heading>
                  <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                  </Heading>
                </VStack>  
            </HStack> 
            
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input 
                  autoCapitalize='none' 
                  autoCorrect={false} 
                  textContentType={'emailAddress'} 
                  variant="rounded"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
                <FormControl.ErrorMessage>invalid e-mail</FormControl.ErrorMessage>
              </FormControl>
              
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                  type="password" 
                  variant="rounded"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <FormControl.ErrorMessage>invalid password</FormControl.ErrorMessage>
                  <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.600" }} alignSelf="flex-end" mt="1">
                    Forgot Password?
                  </Link>
              </FormControl>
              
              <Button mt="2" colorScheme="warmGray" borderRadius={50} onPress={handleSignIn}>
                Sign in
              </Button>
              
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="warmGray" _dark={{ color: "warmGray.200" }}>
                  I'm a new user.{" "}
                </Text>
                <Link _text={{ color: "indigo.600", fontWeight: "medium", fontSize: "sm" }}>
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};