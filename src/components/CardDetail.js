import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Card } from 'react-native-elements';
import Modal from './Modal'

const CardDetail = ({id, firstName, lastName, age, color, onChangeData, onDeleteData}) => {
  const [ isOverlayVisible, setOverlayVisibility ] = useState(false);
  const [ overlayData, setOverlayData ] = useState({
    firstName,
    lastName,
    age,
    color
  });

  const cardName = `${firstName} ${lastName}`.toUpperCase();

  const getPreferedColorStyle = () => {
    return {
      color: color.toLowerCase(),
      fontSize: 20,
    }
  };

  const toggleOverlayVisibility = () => {
    setOverlayVisibility(!isOverlayVisible);
  };

  const handleModalDataChange = (field, value) => {
    setOverlayData({...overlayData, [field]: value});
  };

  return (
    <View style={{flex: 1}}>
      <Card style={styles.cardDetailWrapper}>
        <Card.Title style={getPreferedColorStyle()}>{cardName}</Card.Title>
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

      <Modal
        title='Edit person'
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

const styles = StyleSheet.create({
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
