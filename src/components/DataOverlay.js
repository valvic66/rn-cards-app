import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Card, Overlay, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const DataOverlay = ({
  data, 
  onChangeFirstName,
  onClearFirstName,
  onChangeLastName,
  onClearLastName,
  onChangeAge,
  onClearAge,
  onChangeColor,
  onClearColor,
  onSave, 
  onToggle, 
  isVisible, 
  onClose
}) => {
  return (
    <View>
      <Overlay isVisible={isVisible} onBackdropPress={onToggle} overlayStyle={styles.overlayStyle}>
        <View>
          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="First name"
              style={styles.overlayTextInputStyle}
              onChangeText={ firstName => onChangeFirstName(firstName)}
              value={data.firstName}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onClearFirstName()}
            />
          </View>

          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="Last name"
              style={styles.overlayTextInputStyle}
              onChangeText={ lastName => onChangeLastName(lastName)}
              value={data.lastName}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onClearLastName()}
            />
          </View>

          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="Age"
              style={styles.overlayTextInputStyle}
              onChangeText={ age => onChangeAge(age)}
              value={data.age}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onClearAge()}
            />
          </View>

          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="Color"
              style={styles.overlayTextInputStyle}
              onChangeText={ color => onChangeColor(color.toLowerCase())}
              value={data.color}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onClearColor()}
            />
          </View>

          <View style={styles.overlaySaveButtonStyle}>
            <Button title='SAVE' onPress={() => onSave()}
            />
          </View>

          <View style={styles.closeIconStyle}>
            <Button
              title='CLOSE'
              type='clear'
              onPress={() => onClose()}
            />
          </View>
        </View>
      </Overlay>
    </View>
  )
}

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

export default DataOverlay;