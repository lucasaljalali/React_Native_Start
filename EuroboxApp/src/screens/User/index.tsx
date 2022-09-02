import React, { useEffect, useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback, ActivityIndicator, Linking } from "react-native";
import { Avatar, Box, Button, Center, FlatList, Heading, HStack, KeyboardAvoidingView, Pressable, Spacer, Text, VStack } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons'; 

import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

export function User() {
  
  const userPhone = auth().currentUser.phoneNumber;

  function signOut(){
    auth().signOut()
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
            <Text>{userPhone}</Text>
            <Button width='1/4' mt="5" colorScheme="warmGray" borderRadius={50} onPress={signOut}>
              Sign out
            </Button>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};