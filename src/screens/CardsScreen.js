import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import CardDetail from "../components/CardDetail";
import { reducer, initialState } from '../utils/reducer';
import { Button, Card, Overlay, Divider, Input , ButtonGroup, BottomSheet} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataOverlay from '../components/DataOverlay';

const WIDTH_50 = '50%';
const WIDTH_80 = '80%';

const CardsScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [ isOverlayVisible, setOverlayVisibility ] = useState(false);
  const [ overlayData, setOverlayData ] = useState({
    firstName: '',
    lastName: '',
    age: '',
    color: ''
  });

  const toggleOverlayVisibility = () => {
    setOverlayVisibility(!isOverlayVisible);
  };

  return (
    <View style={{flex: 1}}>
      <DataOverlay 
        data={overlayData}
        isVisible={isOverlayVisible}
        onToggle={() => toggleOverlayVisibility()}
        onChangeFirstName={(firstName) => setOverlayData({...overlayData, firstName})}
        onClearFirstName={() => setOverlayData({...overlayData, firstName: ''})}
        onChangeLastName={(lastName) => setOverlayData({...overlayData, lastName})}
        onClearLastName={() => setOverlayData({...overlayData, lastName: ''})}
        onChangeAge={(age) => setOverlayData({...overlayData, age})}
        onClearAge={() => setOverlayData({...overlayData, age: ''})}
        onChangeColor={(color) => setOverlayData({...overlayData, color})}
        onClearColor={() => setOverlayData({...overlayData, color: ''})}
        onClose={() => toggleOverlayVisibility()}
        onSave={() => {
          dispatch({type: 'add_person', payload: overlayData});
          toggleOverlayVisibility();
        }}
      />
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
        <Button
          title='Reset ALL'
          type='clear'
          onPress={() => dispatch({type: 'reset_all'})}
        />
      </View>
      {state.persons.length > 0 && (
        <Text style={{textAlign: 'center'}}>Cards found: {state.persons.length}</Text>
      )}
      <View style={styles.addButtonStyle}>
        <Button
          title='ADD PERSON'
          type='outline'
          onPress={() => {
            toggleOverlayVisibility()
          }}
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
                  onDeleteData={(id) => dispatch({
                    type: 'delete_person',
                    payload: {
                      deletePersonId: id.toString()
                    }
                  })}
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
  },
  overlayStyle: {
    width: WIDTH_80,
    padding: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  overlayTextInputStyle: {
  },
  closeIconStyle: {
    fontSize: 20,
    padding: 5,
    alignSelf: 'flex-end'
  },
  closeIconTextInputStyle: {
    position: 'absolute',
    fontSize: 16,
    padding: 5,
    top: 7,
    right: 5
  },
  overlaySaveButtonStyle: {
    marginTop: 10
  },
  addButtonStyle: {
    padding: 5,
    marginTop: 5
  }
});

export default CardsScreen;
