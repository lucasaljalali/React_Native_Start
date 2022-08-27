import React, { useState} from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { Link, Box, Center, Heading, FormControl, VStack, Input, Button, Text, HStack, Image, KeyboardAvoidingView, Icon } from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import auth from '@react-native-firebase/auth'


export function Register({navigation}){

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  function handleRegister(){
    //setLoading(true);
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert('Account', 'Successfully registered!'))
    .catch((error) => Alert.alert('Error', error.message))
    //.finally(() =>  setLoading(false));
    // ai tem que logar na home page com o usuario cadastrado
  };

  return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} h={{ base: "400px", lg: "auto" }} flex={1}>    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <HStack alignItems={'center'} space={2} pl={50} >
              <Image source={require('../../../assets/logo.png')} size={50} alt={'Eurobox logo'}/>
                <VStack justifyContent={'center'}>
                  <Heading size='sm' fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Sign Up
                  </Heading>
                </VStack>  
            </HStack> 
            
            <VStack space={2} mt="2">
              <FormControl>
                <FormControl.Label>First and Last name</FormControl.Label>
                <Input 
                  autoCorrect={false} 
                  textContentType={'name'} 
                  variant="rounded"
                  value={name}
                  onChangeText={text => setName(text)}
                />
                <FormControl.ErrorMessage>invalid name</FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <FormControl.Label>Cellphone №</FormControl.Label>
                <Input 
                  autoCorrect={false} 
                  textContentType={'telephoneNumber'}   
                  variant="rounded"
                  placeholder="country code + number"
                  value={phone}
                  onChangeText={text => setPhone(text)}
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
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
                <FormControl.ErrorMessage>invalid e-mail</FormControl.ErrorMessage>
              </FormControl>
              
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                  type={show ? "text" : "password"}
                  variant="rounded"
                  InputRightElement={<Icon as={MaterialIcons} name={show ? "visibility" : "visibility-off"} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)}/>}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <FormControl.ErrorMessage>invalid password</FormControl.ErrorMessage>
              </FormControl>
              
              <Button mt="4" colorScheme="warmGray" borderRadius={50} onPress={handleRegister}>
                Register
              </Button>
              
              <HStack mt="4" justifyContent="center" alignItems='center'>
                <Text fontSize="sm" color="warmGray" _dark={{ color: "warmGray.200" }}>
                  Register with Google:{" "}
                </Text>
                <Button size="sm" py={3} variant="ghost" onPress={()=>console.log('google')} >
                  <Icon as={Ionicons} name='logo-google' color="blue.500" size={5}/>
                </Button>      
              </HStack>
              <Link onPress={()=> navigation.navigate('SignIn')} justifyContent='center' p={1} _text={{ color: "indigo.600", fontWeight: "medium", fontSize: "sm" }}>
                back to Sign In
              </Link>
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};