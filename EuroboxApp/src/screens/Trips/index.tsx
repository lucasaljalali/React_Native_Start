import React, { useEffect, useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Avatar, Box, Button, Center, FlatList, Heading, HStack, KeyboardAvoidingView, Spacer, Text, VStack } from 'native-base';

import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import { date } from "yup/lib/locale";

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


export function Trips({ navigation }) {

  const currentUser = auth().currentUser;
  const [books, setBooks] = useState<BookProps[]>([]);
  
  function signOut(){
    auth().signOut()
    .then(navigation.navigate('SignIn'))
  };

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
    });

    return () => subscribe();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      h={{ base: "400px", lg: "auto" }}
      flex={1}
      bg='warmGray.700'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            Trips page of {currentUser.phoneNumber}
          </Box>

          <Box>
            <Button width='1/4' mt="2" colorScheme="warmGray" borderRadius={50} onPress={()=>console.log({books})}>
              Sign out
            </Button>
            <Heading fontSize="xl" p="4" pb="3">
              Trips
            </Heading>
            <FlatList data={books} renderItem={({item}) => 
              <Box borderBottomWidth="1" _dark={{borderColor: "muted.50"}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={{}} />
                  <VStack>
                    <Text _dark={{color: "warmGray.50"}} color="coolGray.800" bold>
                      {item.name}
                    </Text>
                    <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>
                      {item.arriving ? 
                        'From: ' + item.airport + '\n' + 'To: ' + item.address
                          : 'From: ' + item.address + '\n' + 'To: ' + item.airport
                      }
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" _dark={{color: "warmGray.50"}} color="coolGray.800" alignSelf="flex-start">
                    {Object.values(item.date)}
                  </Text>
                </HStack>
              </Box>} keyExtractor={item => item.id} />
          </Box>;
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};