import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context } from '../context/CardsContext';

const CardDetailScreen = ({ navigation }) => {
  const personId = navigation.getParam('personId');
  const { state } = useContext(Context);
  const { id, firstName, lastName, age, color } = state.find(person => person.id === personId);

  return (
    <View>
      <Text>CardDetailScreen</Text>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
      <Text>{age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default CardDetailScreen;