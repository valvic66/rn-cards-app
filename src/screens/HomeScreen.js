import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';


const HomeScreen = (props) => {
  return (
    <View style={styles.homeScreenWrapperStyle}>
      <Button title='Go to cards' onPress={() => props.navigation.navigate('Cards')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  homeScreenWrapperStyle: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  }
});

export default HomeScreen;
