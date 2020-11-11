import React, { useState, useContext } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import CardDetail from "../components/CardDetail";
import { Button } from 'react-native-elements';
import Modal from '../components/Modal';
import { Context } from '../context/CardsContext';

const CardsScreen = () => {
  const [ isOverlayVisible, setOverlayVisibility ] = useState(false);
  const [ overlayData, setOverlayData ] = useState({});
  const { state, dispatch } = useContext(Context);

  const toggleOverlayVisibility = () => {
    setOverlayVisibility(!isOverlayVisible);
  };

  const handleModalDataChange = (field, value) => {
    setOverlayData({...overlayData, [field]: value});
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        title="Add person"
        data={overlayData}
        isVisible={isOverlayVisible}
        onModalDataChange={(field, value) => handleModalDataChange(field, value)}
        onToggle={() => toggleOverlayVisibility()}
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

      {state.length > 0 && (
        <Text style={{textAlign: 'center'}}>Cards found: {state.length}</Text>
      )}
      <View style={styles.addButtonStyle}>
        <Button
          title='ADD PERSON'
          type='outline'
          onPress={() => {
            toggleOverlayVisibility();
          }}
        />
      </View>

      <View style={styles.cardsStyle}>
        <FlatList 
          data={state}
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
  cardsStyle: {
    flex: 1
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
