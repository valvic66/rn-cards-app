import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Modal from './Modal';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 

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

        <View style={styles.headerIconsWrapperStyle}>
          <TouchableOpacity onPress={() => toggleOverlayVisibility()}>
            <AntDesign 
              style={styles.headerIconStyle} 
              name='edit'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDeleteData(id)} >
            <FontAwesome style={styles.headerIconStyle} 
              name='trash-o'
              color='red' 
            />
          </TouchableOpacity>
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
  },
  headerIconsWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerIconStyle: {
    padding: 8,
    marginHorizontal: 2,
    fontSize: 26,
    textAlign: 'center',
    borderRadius: 22
  }
});

export default CardDetail;
