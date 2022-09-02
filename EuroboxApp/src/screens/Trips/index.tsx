import React, { useEffect, useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback, ActivityIndicator, Linking } from "react-native";
import { Avatar, Box, Button, Center, FlatList, Heading, HStack, KeyboardAvoidingView, Pressable, Spacer, Text, VStack } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons'; 

import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

export type BookProps = {
  id: string;
  date: object;
  name: string;
  userPhone: string;
  flight: string;
  arriving: boolean;
  airport: string;
  address: string;
  passengers: string;
  luggages: string;
  status: string;
};


export function Trips() {
  
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<BookProps[]>([]);
  const userPhone = auth().currentUser.phoneNumber;

  useEffect(() => {
    const subscribe = firestore()
    .collection('books')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as BookProps[];
      setBooks(data);
      setLoading(false);
    });
    return () => subscribe();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  };

  function handleWhatsApp(){
    const url = 'whatsapp://send?text=' + 'Olá!' + '&phone=' + userPhone;
    Linking.openURL(url)
    .catch(() => {alert('Make sure WhatsApp is installed on your device')})
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      h={{ base: "400px", lg: "auto" }}
      flex={1}
      bg='warmGray.100'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box>
            <Heading fontSize="sm" p="2" pt='5'>
              Trips of {userPhone}
            </Heading>
            <FlatList data={books} renderItem={({item}) => 
              {if (item.userPhone === userPhone){
                return( 
              <Box w='98%' flex='1' bg={item.arriving ? 'warmGray.200' : 'warmGray.100'} shadow='3' h='150' borderRadius='20' mb='2' justifyContent='center' alignSelf='center'>
                <HStack space='2' justifyContent="space-between" p='2'>
                  <VStack w='15%' alignItems='center' justifyContent='space-between'>
                    <Avatar size="48px" source={{uri:'https://github.com/lucasaljalali.png'}} />
                    {item.arriving ? <FontAwesome5 name="plane-arrival" size={16} color="black" /> : ''}
                  </VStack>
                  <VStack w='60%'>
                    <Text  _dark={{color: "warmGray.50"}} color="coolGray.800" bold>
                      {item.name}
                    </Text>
                    <Pressable onPress={()=>handleWhatsApp()}>  
                      <Text fontSize="xs" color='darkBlue.700'>
                        {item.userPhone}
                      </Text>
                    </Pressable>  
                    <Text fontSize="xs" color="warmGray.800" _dark={{color: "warmGray.200"}}>
                      {item.arriving ? 
                        'From: ' + item.airport + '\n' + 'To: ' + item.address
                          : 'From: ' + item.address + '\n' + 'To: ' + item.airport
                      }
                    </Text>
                    <HStack>
                      {item.arriving ?
                      <Box bg='success.600' borderRadius='5' px='1' mr='1'>  
                        <Text fontSize="xs" color="warmGray.800">{'Flight: ' + item.flight}</Text>
                      </Box>
                      : ''}
                      <Text fontSize="xs" color="warmGray.600">{'pax: ' + item.passengers}</Text>
                      <Text fontSize="xs" color="warmGray.600">{' | ' + 'bags: ' + item.luggages}</Text>
                    </HStack>
                  </VStack>
                  <Spacer/>
                  <Text w='15%' fontSize="xs" _dark={{color: "warmGray.50"}} color="coolGray.800" alignSelf="flex-start">
                    {Object.values(item.date)}
                  </Text>
                </HStack>
              </Box>)}}} keyExtractor={item => item.id} />
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};