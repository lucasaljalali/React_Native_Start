import React, { useState } from "react";
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, KeyboardAvoidingView, Pressable, Select, Stack, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import DatePicker from "react-native-date-picker";
import moment from 'moment-timezone';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export function Book() {

  const userPhone = auth().currentUser.phoneNumber;

  const [name, setName] = useState('');
  const [flight, setFlight] = useState('');
  const [airport, setAirport] = useState('');
  const [address, setAddress] = useState('');
  const [passengers, setPassengers] = useState('');
  const [luggages, setLuggages] = useState('');
  const [date, setDate] = useState(new Date());
  
  const [arriving, setArriving] = useState(true);
  const [open, setOpen] = useState(false);

  moment.tz.setDefault('Europe/Lisbon');

  function handleBookTransfer(){
    if (!date) { 
      Alert.alert('Date', 'Please select the date.')
    } else if (!userPhone) {
      Alert.alert('Phone Number', 'Please check your phone number.')
    } else if (!name) {
      Alert.alert('Name', 'Please insert passenger first and last name.')
    } else if (!flight && arriving) {
      Alert.alert('Flight №', 'Please insert the flight №.')
    } else if (!airport) {
      Alert.alert('Airport', 'Please select a airport.')
    } else if (!address) {
      Alert.alert('Address', 'Please insert a address.')
    } else if (!passengers) {
      Alert.alert('Passengers', 'Please insert the № of passengers.')
    } else if (!luggages) {
      Alert.alert('Luggages', 'Please insert the № of luggages.')
    } else {
    firestore()
    .collection('books')
    .add({
      date,
      userPhone,
      name,
      flight,
      arriving,
      airport,
      address,
      passengers,
      luggages,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => Alert.alert('Yeah!', 'Transfer successfully booked!'))
    .catch((error) => Alert.alert(error))
    }
  };

  function dismiss() {
    Keyboard.dismiss();
    setOpen(false)
  };


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} h={{ base: "400px", lg: "auto" }} flex={1}>    
      <TouchableWithoutFeedback accessible={false} onPress={dismiss}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack justifyContent={'center'} ml='2'>
              <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                Transfer
              </Heading>
              <Heading mb="3" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                Let's book your transfer!
              </Heading>
            </VStack>  

            <VStack space={3}>
              <Input
                h='10'
                bg='trueGray.200'
                shadow='1'
                isReadOnly={true} 
                variant="rounded"
                value={userPhone}
              />

              <Box w='100%' alignItems='center'>
                <Button 
                  variant='solid' 
                  h='16'
                  w='100%' 
                  mt='0'
                  _text={{color: "#1F2937"}}
                  bgColor='trueGray.200' 
                  size='md' 
                  borderRadius={50} 
                  borderWidth={1}
                  borderColor='coolGray.300' 
                  shadow='3' 
                  onPress={() => setOpen(!open)}>
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

              <Input       
                h='10'
                bg='trueGray.200'
                shadow='1'
                placeholder="Name for airport sign"
                autoCapitalize='words'
                autoCorrect={false}
                textContentType={'name'} 
                variant="rounded"
                onChangeText={(text)=>setName(text)}
              />

              <Input
                isDisabled={arriving ? false : true}
                _disabled={{bg:'warmGray.400'}}
                value={arriving ? flight : ''}
                h='10'
                bg='trueGray.200'
                shadow='1'
                placeholder="Flight № (XX0000)"
                autoCapitalize='characters'
                autoCorrect={false}
                variant="rounded"
                onChangeText={(text)=>setFlight(text)}
              />

              <Stack direction={ arriving ? 'column' : 'column-reverse' }>
                <FormControl>
                  <FormControl.Label m='0'>{ arriving ? 'From:' : 'To:' }</FormControl.Label>
                    <Box borderRadius='50' shadow='1'>
                      <Select 
                        h='10'
                        bg='trueGray.200'
                        variant="rounded"
                        selectedValue={airport} 
                        minWidth="200" 
                        accessibilityLabel="Choose Airport" 
                        placeholder="Choose Airport" 
                        _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} 
                        onValueChange={text => setAirport(text)}>
                        <Select.Item label="Lisbon Airport" value="Lisbon Airport" />
                      </Select>
                    </Box>
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
                    bg='trueGray.200'
                    shadow='1'
                    placeholder="Full address"
                    textContentType='fullStreetAddress'
                    autoCapitalize='characters'
                    autoCorrect={false}
                    variant="rounded"
                    onChangeText={(text)=>setAddress(text)}
                  />
                </FormControl>
              </Stack>

              <HStack justifyContent='space-between'>
                  <Input
                    h='10'
                    bg='trueGray.200'
                    shadow='1'
                    w={{base:'48%'}}
                    placeholder="№ of passengers" 
                    variant="rounded"
                    keyboardType='numeric'
                    onChangeText={(text)=>setPassengers(text)}
                  />
                
                  <Input
                    h='10'
                    bg='trueGray.200'
                    shadow='1'
                    w={{base:'48%'}}
                    placeholder="№ of luggages"
                    autoCapitalize='characters'
                    autoCorrect={false}
                    variant="rounded"
                    keyboardType='numeric'
                    onChangeText={(text)=>setLuggages(text)}
                  />
              </HStack>
              
              <Button shadow='1' h='10' mt="2" colorScheme="warmGray" borderRadius={50} onPress={handleBookTransfer}>
                Book now
              </Button>
              
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};