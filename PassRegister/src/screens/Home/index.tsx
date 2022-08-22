import { useCallback, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Card, CardProps } from '../../components/Card';
import { HeaderHome } from '../../components/HeaderHome';
import { useFocusEffect } from '@react-navigation/native';

import { styles } from './styles';
import { Button } from '../../components/Button';

export function Home() {
  const [data, setData] = useState<CardProps[]>([]);

  const { getItem, setItem } = useAsyncStorage("@passregister:passwords");

  const [isVisible, setIsVisible] = useState(true);

  async function handleFetchData() {
    const response = await /*AsyncStorage.*/getItem(/*"@passregister:passwords"*/);
    const data = response ? JSON.parse(response) : [];
    setData(data);
  };

  async function handleRemoveData(id: string) {
    const response = await /*AsyncStorage.*/getItem(/*"@passregister:passwords"*/);
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item: CardProps) => item.id !== id);
    setItem(JSON.stringify(data));
    setData(data);
  };

  function showConfirm(id: string){
    return Alert.alert('Delete', 'Are you sure you want to delete this password?',
      [{text:'Yes', onPress: ()=> {handleRemoveData(id)}}, {text:'No',}])
  }

  function IsVisible() {
    setIsVisible(prevState => !prevState);
  };

  useFocusEffect(useCallback(()=>{
    handleFetchData();
  }, []));

  return (
    <View style={styles.container}>
      <HeaderHome />

      <View style={styles.listHeader}>
        <Text style={styles.title}>
          Your Passwords
        </Text>

        <Text style={styles.listCount}>
          {`${data.length} in total`}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={ !isVisible ? null : ({ item }) =>
          <Card
            data={item}
            onPress={() => {showConfirm(item.id)}}
          />
        }
      />

      <View style={styles.footer}>
        <Button
          title="Show/Hide all"
          onPress={IsVisible}
        />
      </View>
    </View>
  );
}