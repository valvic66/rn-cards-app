import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Card, Overlay, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataOverlay from '../components/DataOverlay'

const CardDetail = ({id, firstName, lastName, age, color, onChangeData, onDeleteData}) => {
  const [ isOverlayVisible, setOverlayVisibility ] = useState(false);
  const [ overlayData, setOverlayData ] = useState({
    firstName,
    lastName,
    age,
    color
  });

  const getPreferedColor = () => {
    return {
      color: color.toLowerCase(),
      fontSize: 20,
    }
  };

  const cardName = `${firstName} ${lastName}`.toUpperCase();

  const toggleOverlayVisibility = () => {
    setOverlayVisibility(!isOverlayVisible);
  };

  const handleModalDataChange = (field, value) => {
    switch(field) {
      case 'firstName':
        setOverlayData({...overlayData, firstName: value});
        break;
      case 'lastName':
        setOverlayData({...overlayData, lastName: value});
        break;
      case 'age':
        setOverlayData({...overlayData, age: value});
        break;
      case 'color':
        setOverlayData({...overlayData, color: value});
        break;
      default:
    }
  }

  return (
    <View style={{flex: 1}}>
      <Card style={styles.cardDetailWrapper}>
        <Card.Title style={getPreferedColor()}>{cardName}</Card.Title>
        <Card.Divider />

        <Text style={styles.fieldLabel}>First name</Text>
        <Text style={styles.firstNameText}>{firstName}</Text>
        
        <Text style={styles.fieldLabel}>Last name</Text>
        <Text style={styles.lastNameText}>{lastName}</Text>

        <Text style={styles.fieldLabel}>Age</Text>
        <Text style={styles.ageText}>{age}</Text>

        <View style={styles.editBtnStyle}>
          <Button
            title='EDIT' 
            onPress={() => {
              toggleOverlayVisibility();
            }} 
          />
        </View> 
        <View style={styles.deleteBtnStyle}>
          <Button
            title='DELETE' 
            onPress={() => onDeleteData(id)} 
          />
        </View>
      </Card>

      <DataOverlay
        data={overlayData}
        isVisible={isOverlayVisible}
        onModalDataChange={(field, value) => handleModalDataChange(field, value)}
        onToggle={() => toggleOverlayVisibility()}
        onSave={() => {
          onChangeData(id, overlayData);
          toggleOverlayVisibility();
        }}
      />
    </View>
  )
};

const WIDTH_50 = '50%';
const WIDTH_80 = '80%';

const styles = StyleSheet.create({
  cardDetailWrapper: {
    
  },
  fieldLabel: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  firstNameText: {
    fontSize: 20,
    marginBottom: 10,
  },
  lastNameText: {
    fontSize: 20,
    marginBottom: 10,
  },
  ageText: {
    fontSize: 18,
    marginBottom: 10,

  },
  editBtnStyle: {
    marginTop: 10
  },
  deleteBtnStyle: {
    marginTop: 10
  }
});

export default CardDetail;
