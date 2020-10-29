import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { sortedLastIndex } from "lodash";

const CardDetail = ({id, firstName, lastName, age, color, onChangeColor}) => {
  const [ newColor, setNewColor ] = useState('');
  const [ isInputVisible, setInputVisibility ] = useState(false);

  const getPreferedColorBox = () => {
    return {
      backgroundColor: color,
      height: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    }
  }

  return (
    <View style={styles.cardDetailWrapper}>
      <Text style={styles.fieldLabel}>First name</Text>
      <Text style={styles.firstNameText}>{firstName}</Text>
      
      <Text style={styles.fieldLabel}>Last name</Text>
      <Text style={styles.lastNameText}>{lastName}</Text>

      <Text style={styles.fieldLabel}>Age</Text>
      <Text style={styles.ageText}>{age}</Text>

      <View style={getPreferedColorBox()}>
        <Text style={styles.preferedColorText}>The color I love</Text>
      </View>

      {isInputVisible && <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(color) => setNewColor(color.toLowerCase())}
        value={newColor}
      />}

      <View style={styles.changeYourMoodBtnStyle}>
        <Button
          title='CHANGE YOUR COLOR MOOD' 
          onPress={() => {
            onChangeColor(id, newColor);
            setNewColor(null);
            setInputVisibility(true);
          }} 
        />
      </View>
      
    </View>
  )
};

const styles = StyleSheet.create({
  cardDetailWrapper: {
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 50,
    marginLeft: 5,
    marginRight: 5,
    padding: 15
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
  preferedColorText: {
    color: 'black',
    fontSize: 18
  },
  changeYourMoodBtnStyle: {
    marginTop: 10
  }
});

export default CardDetail;
