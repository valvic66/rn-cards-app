import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import CardDetail from "../components/CardDetail";
import { reducer, initialState } from '../utils/reducer';
import { Button, Card, Overlay, Divider, Input } from 'react-native-elements';

const CardsScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Button 
        title='Sort by name ASC'
        onPress={() => dispatch({type: 'sort_by_name_asc'})}
      />

      <Divider style={{ backgroundColor: 'white', paddingTop: 5, paddingBottom: 5 }} />

      <Button 
        title='Sort by name DSC'
        onPress={() => dispatch({type: 'sort_by_name_dsc'})}
      />
      <Text>{state.lastColorUsed}</Text>
      <FlatList 
        data={state.persons}
        renderItem={({item}) => {
            return (
              <CardDetail
                id={item.id}  
                firstName={item.firstName}
                lastName={item.lastName}
                age={item.age}
                color={item.color}
                onChangeColor={(id, newColor) => {
                  dispatch({type: 'change_last_color', payload: newColor});
                }}
                onChangeData={(id, newPerson) => {
                  dispatch({type: 'change_person', payload: {
                    personId: id.toString(), 
                    firstName: newPerson.firstName, 
                    lastName: newPerson.lastName, 
                    age: newPerson.age, 
                    color: newPerson.color
                  }})
                }}
              />
            )
          }
        }
        keyExtractor={(item) => item.id}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default CardsScreen;
