import React, { useReducer, useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Image, Input, KeyboardAvoidingView, Pressable, Select, Stack, VStack } from 'native-base';
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
                  h='10'
                  isReadOnly={true} 
                  variant="rounded"
                  value={currentUser.phoneNumber || ''}
                />
                <FormControl.ErrorMessage>invalid phone number</FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <Input       
                  h='10'
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
                  h='10'
                  placeholder="Flight № (XX0000)"
                  autoCapitalize='characters'
                  autoCorrect={false}
                  variant="rounded"
                  onChangeText={(text)=>setFlight(text)}
                />
                <FormControl.ErrorMessage>invalid flight №</FormControl.ErrorMessage>
              </FormControl>

              <Stack direction={ arriving ? 'column' : 'column-reverse' }>
                <FormControl>
                  <FormControl.Label m='0'>{ arriving ? 'From:' : 'To:' }</FormControl.Label>
                    <Select 
                      h='10'
                      variant="rounded"
                      selectedValue={airport} 
                      minWidth="200" 
                      accessibilityLabel="Choose Airport" 
                      placeholder="Choose Airport" 
                      _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} 
                      onValueChange={text => setAirport(text)}>
                      <Select.Item label="Lisbon Airport" value="Lisbon Airport" />
                    </Select>
                </FormControl>
                
                <Pressable alignSelf={'center'} onPress={()=>setArriving(!arriving)}>
                  {({isPressed}) => {
                    return  <Box style={{transform: [{translateY: 10}]}}>
                              <Box borderRadius={50} padding={2} shadow="2" bg={!isPressed ? "coolGray.200" : "coolGray.300"} style={{transform: [{scale: isPressed ? 0.96 : 1}]}}>
                                <AntDesign name="retweet" size={24} color="black" />
                              </Box>
                            </Box>  
                  }}
                </Pressable>
                
                <FormControl>
                  <FormControl.Label m='0'>{ arriving ? 'To:' : 'From:' }</FormControl.Label>
                  <Input
                    h='10'
                    placeholder="Full address"
                    textContentType='fullStreetAddress'
                    autoCapitalize='characters'
                    autoCorrect={false}
                    variant="rounded"
                    onChangeText={(text)=>setAddress(text)}
                  />
                  <FormControl.ErrorMessage>invalid address</FormControl.ErrorMessage>
                </FormControl>
              </Stack>

              <HStack justifyContent='space-between'>
                  <Input
                    h='10'
                    w={{base:'48%'}}
                    placeholder="№ of passengers" 
                    variant="rounded"
                    keyboardType='numeric'
                    onChangeText={(text)=>setPassengers(text)}
                  />
                
                  <Input
                    h='10'
                    w={{base:'48%'}}
                    placeholder="№ of luggages"
                    autoCapitalize='characters'
                    autoCorrect={false}
                    variant="rounded"
                    keyboardType='numeric'
                    onChangeText={(text)=>setLuggages(text)}
                  />
              </HStack>

              <Box w='100%' alignItems='center'>
                <Button variant="outline" h='16' w='100%' colorScheme="warmGray" size='md' borderRadius={50} borderWidth={2} onPress={() => setOpen(!open)}>
                  {'Date: '+ date.toDateString() + '\n' + 'Time: '+ date.toLocaleTimeString()}
                </Button>
                <DatePicker
                  style={{width: 250}}
                  modal={!open}
                  mode='datetime'
                  date={date}
                  onDateChange={(value) => setDate(value)}
                  locale='en'
                  minuteInterval={5}
                />
              </Box>
              
              <Button h='10' mt="2" colorScheme="warmGray" borderRadius={50} onPress={()=>console.log(date)}>
                Book now
              </Button>
              
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};