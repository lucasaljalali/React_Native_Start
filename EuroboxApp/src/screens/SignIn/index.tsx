import React, { useState} from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import { Box, Center, Heading, FormControl, VStack, Input, Button, HStack, Image, KeyboardAvoidingView, } from 'native-base';
import auth from '@react-native-firebase/auth';


export function SignIn({navigation}){
  
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  async function signInWithPhoneNumber(phoneNumber) {
    if (!phoneNumber) { 
      Alert.alert('Phone Number', 'Please enter your phone number.')
    } else if (phoneNumber.length < 6) {
      Alert.alert('Phone Number', 'Please check your phone number.')
    } else {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
      }
  };

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      return (
        navigation.navigate('Home')
      )
    } catch (error) {
        Alert.alert('Error', error.message);
        setConfirm(null);
      }
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
                <FormControl.Label>Phone</FormControl.Label>
                <Input
                  placeholder='+000 000000000' 
                  autoCapitalize='none' 
                  autoCorrect={false} 
                  textContentType={'telephoneNumber'} 
                  variant="rounded"
                  value={phoneNumber}
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
                <FormControl.ErrorMessage>invalid phone number</FormControl.ErrorMessage>
              </FormControl>
              
              {!confirm ? 
              <Button mt="2" colorScheme="warmGray" borderRadius={50} onPress={() => signInWithPhoneNumber(phoneNumber)}>
                Sign in
              </Button>
                :
              <FormControl>
                <Input value={code} onChangeText={text => setCode(text)} />
                <Button onPress={() => confirmCode()}>
                  Confirm Code 
                </Button>  
              </FormControl>
              }
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};