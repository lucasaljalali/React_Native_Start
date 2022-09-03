import React, { useState , useRef } from 'react';
import { ActivityIndicator, Alert, Keyboard, Platform, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Box, Center, Heading, FormControl, VStack, Input, Button, HStack, Image, KeyboardAvoidingView, } from 'native-base';
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth';


export function SignIn(){
  
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const phoneInput = useRef(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  
  async function signInWithPhoneNumber(phoneNumber: string) {
    if (!phoneNumber) { 
      Alert.alert('Phone Number', 'Please enter your phone number.')
    } else if (phoneNumber.length < 9) {
      Alert.alert('Phone Number', 'Please check your phone number.')
    } else {
        setLoading(true);
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
        setLoading(false);
      }
  };

  async function confirmCode() {
    setLoading(true);
    try {
      await confirm.confirm(code);
    } catch (error) {
        Alert.alert('Error', error.message);
        setConfirm(null);
      }
  };

  if (loading) {
    return (
      <Center w="100%" flex={1}>
        <ActivityIndicator size='large'/>
      </Center>
    )
  };

  return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} h={{ base: "400px", lg: "auto" }} flex={1}>    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex='1'>
          <Box safeArea p="2" py="8" w="90%" maxW="290" alignItems='center' justifyContent='center'>
            <HStack space='3'>
              <Image source={require('../../../assets/logo.png')} size={70} alt={'Eurobox logo'}/>
                <VStack justifyContent={'center'} pr='8'>
                  <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Welcome
                  </Heading>
                  <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                  </Heading>
                </VStack>  
            </HStack> 
            
            <VStack w='500' space='3' mt="5">
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="PT"
                layout="first"
                withShadow
                autoFocus
                containerStyle={{width: '100%', height: 50, borderRadius: 50}}
                textContainerStyle={{paddingVertical: 0, borderTopRightRadius: 50, borderBottomRightRadius: 50}}
                onChangeFormattedText={text => setPhoneNumber(text)}
              />
              
              {!confirm ? 
              <Button onPress={() => signInWithPhoneNumber(phoneNumber)} mt="2" colorScheme="warmGray" borderRadius={50} shadow='1'>
                Sign in
              </Button>
                :
              <FormControl>
                <Input value={code} onChangeText={text => setCode(text)} variant="rounded" textAlign='center' size='lg' autoFocus/>
                <Button onPress={() => confirmCode()} borderRadius={50} w='1/2' alignSelf='center' mt='5'>
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