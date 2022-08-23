import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { useLinkProps } from '@react-navigation/native';

export type CardProps = {
  id: string;
  name: string;
  user: string;
  password: string;
  passVisibleState: string;
}
type Props = {
  data: CardProps;
  onPressRemove: () => void;
  onPressVisible: () => void;
}


export function Card({ data, onPressRemove, onPressVisible,  }: Props) {
  
  const visible = (data.passVisibleState === 'true');

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressVisible}>
        <MaterialIcons
          name={ visible ? "visibility" : "visibility-off"}
          size={22}
          color="#888D97"
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.email}>
                {data.user}
              </Text>

          {
            visible
              ?
              <Text style={styles.password}>
                {data.password}
              </Text>
              :
              <Text></Text>
          }
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPressRemove}
      >
        <MaterialIcons
          name="delete"
          size={22}
          color="#888D97"
        />
      </TouchableOpacity>
    </View>
  );
}