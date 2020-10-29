import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello Vali</Text>
      <Button title='Go to cards' onPress={() => props.navigation.navigate('Cards')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
