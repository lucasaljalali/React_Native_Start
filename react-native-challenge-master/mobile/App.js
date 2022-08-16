import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FetchList from './components/FetchList';

export default function App() {

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <Text>Currencies available on MoonPay:</Text>
      <FetchList/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:75,
  },
});
