import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';

export default function App() {
  return (
    <View style={styles.mainBackground}>
      <StatusBar style='auto'/>

      <Comp1/>

      <View style={styles.sectionsBackground}>
        <Comp2 number="1"/>
        <Comp2 number="2"/>
        <Comp2 number="3"/>
        <Comp2 number="4"/>
        <Comp2 number="5"/>
        <Comp2 number="6"/>
      </View>

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
});