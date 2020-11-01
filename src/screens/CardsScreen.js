import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import CardDetail from "../components/CardDetail";
import { reducer, initialState } from '../utils/reducer';
import { Button, Card, Overlay, Divider, Input , ButtonGroup, BottomSheet} from 'react-native-elements';


const CardsScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={{flex: 1}}>
      <View style={styles.sortByButtonGroupStyle}>
        <Button
          title='Sort By Name Asc'
          type='clear'
          onPress={() => dispatch({type: 'sort_by_name_asc'})}
        />
        <Button
          title='Sort By Name Dsc'
          type='clear'
          onPress={() => dispatch({type: 'sort_by_name_dsc'})}
        />
      </View>

      <View style={styles.filterButtonGroupStyle}>
        <Button
          title='Filter By Age 0 to 18'
          type='clear'
          onPress={() => dispatch({type: 'filter_by_age', payload: {minAge: 0, maxAge: 18}})}
        />
        <Button
          title='Reset Filters'
          type='clear'
          onPress={() => dispatch({type: 'reset_filters'})}
        />
      </View>

      <View style={styles.cardsStyle}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  sortByButtonGroupStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  filterButtonGroupStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardsStyle: {
    flex: 1
  }
});

export default CardsScreen;
