import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button, Overlay, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Modal = ({
  title,
  data,
  onModalDataChange,
  onToggle, 
  onSave,
  isVisible
}) => {
  return (
    <View>
      <Overlay isVisible={isVisible} onBackdropPress={onToggle} overlayStyle={styles.overlayStyle}>
        <View>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="First name"
              style={styles.overlayTextInputStyle}
              onChangeText={(value) => onModalDataChange('firstName', value)}
              value={data.firstName}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onModalDataChange('firstName', '')}
            />
          </View>

          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="Last name"
              style={styles.overlayTextInputStyle}
              onChangeText={(value) => onModalDataChange('lastName', value)}
              value={data.lastName}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onModalDataChange('lastName', '')}
            />
          </View>

          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="Age"
              style={styles.overlayTextInputStyle}
              onChangeText={(value) => onModalDataChange('age', value)}
              value={data.age}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onModalDataChange('age', '')}
            />
          </View>

          <View style={styles.textInputWrapperStyle}>
            <Input
              placeholder="Color"
              style={styles.overlayTextInputStyle}
              onChangeText={(value) => onModalDataChange('color', value.toLowerCase())}
              value={data.color}
            />
            <Icon 
              style={styles.closeIconTextInputStyle}
              name='close'
              onPress={() => onModalDataChange('color', '')}
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
              onPress={() => onToggle()}
            />
          </View>
        </View>
      </Overlay>
    </View>
  )
}

const WIDTH_80 = '80%';
const styles = StyleSheet.create({
  overlayStyle: {
    width: WIDTH_80,
    padding: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  titleTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    padding: 5
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

export default Modal;