import React, { useEffect, useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import { Avatar, Box, Button, Center, FlatList, Heading, HStack, KeyboardAvoidingView, Spacer, Text, VStack } from 'native-base';

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

  function signOut(){
    auth().signOut()
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
      setLoading(false);
    });
    return () => subscribe();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      h={{ base: "400px", lg: "auto" }}
      flex={1}
      bg='warmGray.700'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center w="100%" flex={1}>
          <Box>
            <Button width='1/4' mt="5" colorScheme="warmGray" borderRadius={50} onPress={signOut}>
              Sign out
            </Button>
            <Heading fontSize="xl" p="4" pb="3">
              Trips of {userPhone}
            </Heading>
            <FlatList data={books} renderItem={({item}) => 
              {if (item.userPhone === userPhone){
                return( 
              <Box borderBottomWidth="1" _dark={{borderColor: "muted.50"}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={{}} />
                  <VStack>
                    <Text _dark={{color: "warmGray.50"}} color="coolGray.800" bold>
                      {item.name}
                    </Text>
                    <Text color="coolGray.300" _dark={{color: "warmGray.200"}}>
                      {item.arriving ? 
                        'From: ' + item.airport + '\n' + 'To: ' + item.address
                          : 'From: ' + item.address + '\n' + 'To: ' + item.airport
                      }
                    </Text>
                    <Text color="coolGray.500" _dark={{color: "warmGray.200"}}>
                      {(item.arriving ? 'Flight: ' + item.flight + ' | ' : '') + 'pax: ' + item.passengers + ' | ' + 'bags: ' + item.luggages}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" _dark={{color: "warmGray.50"}} color="coolGray.800" alignSelf="flex-start">
                    {Object.values(item.userPhone)}
                  </Text>
                </HStack>
              </Box>)}}} keyExtractor={item => item.id} />
          </Box>;
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};