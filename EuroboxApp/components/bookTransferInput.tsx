import React, { useReducer, useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Image, Input, KeyboardAvoidingView, Pressable, Select, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

import auth from '@react-native-firebase/auth';
import DatePicker from "react-native-date-picker";


export function BookTransferForm() {

  const currentUser = auth().currentUser;

  const [name, setName] = useState('');
  const [flight, setFlight] = useState('');
  const [airport, setAirport] = useState('');
  const [address, setAddress] = useState('');
  const [passengers, setPassengers] = useState('');
  const [luggages, setLuggages] = useState('');
  const [date, setDate] = useState(new Date());
  
  const [arriving, setArriving] = useState(true);
  const [open, setOpen] = useState(false);

  function handleBookTransfer(){

  };

  function onCancel() {
    setOpen(false)
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} h={{ base: "400px", lg: "auto" }} flex={1}>    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
          <HStack alignItems={'center'} space={3}>
                <VStack justifyContent={'center'}>
                  <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Transfer
                  </Heading>
                  <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                    Let's book your transfer!
                  </Heading>
                </VStack>  
            </HStack> 
            
            <VStack space={3} mt="5">
              <FormControl>
                <Input
                  isReadOnly={true} 
                  variant="rounded"
                  value={currentUser.phoneNumber || ''}
                />
                <FormControl.ErrorMessage>invalid phone number</FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <Input       
                  placeholder="Name for airport sign"
                  autoCapitalize='words'
                  autoCorrect={false}
                  textContentType={'name'} 
                  variant="rounded"
                  onChangeText={(text)=>setName(text)}
                />
                <FormControl.ErrorMessage>invalid name</FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <Input
                  placeholder="Flight № (XX0000)"
                  autoCapitalize='characters'
                  autoCorrect={false}
                  variant="rounded"
                  onChangeText={(text)=>setFlight(text)}
                />
                <FormControl.ErrorMessage>invalid flight №</FormControl.ErrorMessage>
              </FormControl>

              {arriving ? 
              <>
              <FormControl>
                <FormControl.Label>From:</FormControl.Label>
                  <Select 
                    variant="rounded"
                    selectedValue={airport} 
                    minWidth="200" 
                    accessibilityLabel="Choose Airport" 
                    placeholder="Choose Airport" 
                    _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} 
                    mt={1} 
                    onValueChange={text => setAirport(text)}>
                    <Select.Item label="Lisbon Airport" value="ux" />
                  </Select>
              </FormControl>
            
              <Pressable alignSelf={'center'} onPress={()=>setArriving(!arriving)}>
                <AntDesign name="retweet" size={24} color="black" />
              </Pressable>

              <FormControl>
                <FormControl.Label>To:</FormControl.Label>
                <Input
                  placeholder="Full address"
                  textContentType='fullStreetAddress'
                  autoCapitalize='characters'
                  autoCorrect={false}
                  variant="rounded"
                  
                  onChangeText={(text)=>setAddress(text)}
                />
                <FormControl.ErrorMessage>invalid address</FormControl.ErrorMessage>
              </FormControl>
              </>
              :
              <>
              <FormControl>
                <FormControl.Label>From:</FormControl.Label>
                <Input
                  placeholder="Full address"
                  textContentType='fullStreetAddress'
                  autoCapitalize='characters'
                  autoCorrect={false}
                  variant="rounded"
                  
                  onChangeText={(text)=>setAddress(text)}
                />
                <FormControl.ErrorMessage>invalid address</FormControl.ErrorMessage>
              </FormControl>

              <Pressable alignSelf={'center'} onPress={()=>setArriving(!arriving)}>
                <AntDesign name="retweet" size={24} color="black" />
              </Pressable>

              <FormControl>
                <FormControl.Label>To:</FormControl.Label>
                  <Select 
                    variant="rounded"
                    selectedValue={airport} 
                    minWidth="200" 
                    accessibilityLabel="Choose Airport" 
                    placeholder="Choose Airport" 
                    _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} 
                    mt={1} 
                    onValueChange={text => setAirport(text)}>
                    <Select.Item label="Lisbon Airport" value="Lisbon Airport" />
                  </Select>
              </FormControl>
              </>
              }

              <HStack justifyContent='space-between'>
                  <Input
                    w={{base:'48%'}}
                    placeholder="№ of passengers" 
                    variant="rounded"
                    keyboardType='numeric'
                    onChangeText={(text)=>setPassengers(text)}
                  />
                
                  <Input
                    w={{base:'48%'}}
                    placeholder="№ of luggages"
                    autoCapitalize='characters'
                    autoCorrect={false}
                    variant="rounded"
                    keyboardType='numeric'
                    onChangeText={(text)=>setLuggages(text)}
                  />
              </HStack>

              <>
                <Button onPress={() => setOpen(!open)}>
                  {'Date: '+ date.toString()}
                </Button>  
                <DatePicker
                  modal={!open}
                  date={date}
                  onDateChange={(date) => setDate(date)}
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                  }}
                />
              </>  
              
              <Button mt="2" colorScheme="warmGray" borderRadius={50} onPress={()=>console.log(airport)}>
                Book now
              </Button>
              
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};