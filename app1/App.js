import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import ProfileImage from './components/profileCircle';

export default function App() {
  return (
    <View style={styles.mainBackground}>
      <StatusBar style='auto'/>

      <Comp1/>

      <Image source={require('./assets/logo.png')} style={styles.logoImage}/>
      
      <View style={styles.sectionsBackground}>
        <Comp2 number="1"/>
        <Comp2 number="2"/>
        <Comp2 number="3"/>
        <Comp2 number="4"/>
        <Comp2 number="5"/>
        <Comp2 number="6"/>
      </View>

      <ProfileImage/>

    </View>
  );
};


const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#222',
  },

  sectionsBackground: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  logoImage: {
    resizeMode: 'contain', 
    height: 75,
    marginBottom: 25,
    overflow: 'hidden',
  },

});