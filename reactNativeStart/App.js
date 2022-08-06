import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SecondaryBlackButton from './components/SecondaryBlackButton';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" /> 

      <View style={styles.firstContainer}>
      <Text style={styles.title}>OLHA SÓ NATHALIA!</Text>
      <Text style={styles.subtitle}>vou deixar um espaço aqui embaixo</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
        <SecondaryBlackButton />
      </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstContainer: {
    width: '75%',
    height: '30%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginBottom: 25,
    borderRadius: 20,
  },

  title: { 
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20, 
  },

  subtitle: {
    color: '#260F5F',
  },

  scrollView: {
    width: '100%',
  },
});
