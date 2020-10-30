import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Card, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardDetail = ({id, firstName, lastName, age, color, onChangeData}) => {
  const [ isOverlayVisible, setOverlayVisibility ] = useState(false);
  const [ overlayData, setOverlayData ] = useState({
    firstName,
    lastName,
    age,
    color
  });

  const getPreferedColor = () => {
    return {
      color,
      fontSize: 20,
    }
  };

  const cardName = `${firstName} ${lastName}`.toUpperCase();

  const toggleOverlayVisibility = () => {
    setOverlayVisibility(!isOverlayVisible);
  };

  return (
    <View>
      <Card style={styles.cardDetailWrapper}>
        <Card.Title style={getPreferedColor()}>{cardName}</Card.Title>
        <Card.Divider />
        <Text style={styles.fieldLabel}>First name</Text>
        <Text style={styles.firstNameText}>{firstName}</Text>
        
        <Text style={styles.fieldLabel}>Last name</Text>
        <Text style={styles.lastNameText}>{lastName}</Text>

        <Text style={styles.fieldLabel}>Age</Text>
        <Text style={styles.ageText}>{age}</Text>

        <View style={styles.changeYourMoodBtnStyle}>
          <Button
            title='EDIT' 
            onPress={() => {
              toggleOverlayVisibility();
            }} 
          />
        </View> 
      </Card>

      <Overlay isVisible={isOverlayVisible} onBackdropPress={toggleOverlayVisibility} overlayStyle={styles.overlayStyle}>
        <Text>First name</Text>
        <View style={styles.textInputWrapperStyle}>
          <TextInput 
            style={styles.overlayTextInputStyle}
            onChangeText={ firstName => setOverlayData({...overlayData, firstName})}
            value={overlayData.firstName}
          />
          <Icon 
            style={styles.closeIconTextInputStyle}
            name='close'
            onPress={() => setOverlayData({...overlayData, firstName: ''})}
          />
        </View>
    

        <Text>Last name</Text>
        <View style={styles.textInputWrapperStyle}>
          <TextInput 
            style={styles.overlayTextInputStyle}
            onChangeText={ lastName => setOverlayData({...overlayData, lastName}) }
            value={overlayData.lastName}
          />
          <Icon 
            style={styles.closeIconTextInputStyle}
            name='close'
            onPress={() => setOverlayData({...overlayData, lastName: ''})}
          />
        </View>

        <Text>Age</Text>
        <View style={styles.textInputWrapperStyle}>
          <TextInput 
            style={styles.overlayTextInputStyle}
            onChangeText={ age => setOverlayData({...overlayData, age}) }
            value={overlayData.age}
          />
          <Icon 
            style={styles.closeIconTextInputStyle}
            name='close'
            onPress={() => setOverlayData({...overlayData, age: ''})}
          />
        </View>  

        <Text>Preferred color</Text>
        <View style={styles.textInputWrapperStyle}>
          <TextInput 
            style={styles.overlayTextInputStyle}
            onChangeText={ color => setOverlayData({...overlayData, color: color.toLowerCase()}) }
            value={overlayData.color}
          />
          <Icon 
            style={styles.closeIconTextInputStyle}
            name='close'
            onPress={() => setOverlayData({...overlayData, color: ''})}
          />
        </View>

        <View style={styles.overlaySaveButtonStyle}>
          <Button title='SAVE' onPress={() => {
              onChangeData(id, overlayData);
              toggleOverlayVisibility();
            }}
          />
        </View>

        <View style={styles.closeIconStyle}>
          <Button
            title='CLOSE'
            type='clear'
            onPress={() => toggleOverlayVisibility()}
          />
        </View>    
        
      </Overlay>
    </View>
    
  )
};

const WIDTH_50 = '50%';
const WIDTH_80 = '80%';

const styles = StyleSheet.create({
  cardDetailWrapper: {
  
  },
  overlayStyle: {
    width: WIDTH_80,
    padding: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  overlayTextInputStyle: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 5,
    borderRadius: 5,
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
  textInputWrapperStyle: {
   
  },
  overlaySaveButtonStyle: {
    marginTop: 10
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
  changeYourMoodBtnStyle: {
    marginTop: 10
  }
});

export default CardDetail;
