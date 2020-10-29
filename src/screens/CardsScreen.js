import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import CardDetail from "../components/CardDetail";
import { reducer, initialState } from '../utils/reducer';

const CardsScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
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
                  dispatch({type: 'change_person', payload: {
                    personId: '1', 
                    firstName: 'new first name', 
                    lastName: 'new last name', 
                    age: 10, 
                    color: 'new color'
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
