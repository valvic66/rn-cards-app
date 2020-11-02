import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';

const JsonApiScreen = () => {
  const [results, setResults] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const json = await res.json();
      setResults(json);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.jsonApiScreenWrapperStyle}>
      <Button title='Get JsonApi data' onPress={() => getData()} />
      <Text>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jsonApiScreenWrapperStyle: {
    
  }
});

export default JsonApiScreen;
