import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { Button } from 'react-native-elements';
import api from '../api/api';

const JsonApiScreen = () => {
  const [results, setResults] = useState([]);

  const getData = async () => {
    try {
      const res = await api.get('/photos');
      setResults(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  const src = results && results[0] && results[0].thumbnailUrl;
  console.log('src', src);

  const renderData = () => {
    return results.map((result, index) => {
      if(index > 500) {
        return null;
      }
      return (
      <View key={index} >
        <Image style={{width: 200, height: 200}} source={{uri: result.thumbnailUrl}} />
      </View>)
    })
  }

  return (
    <View style={styles.jsonApiScreenWrapperStyle}>
      <Button title='Get JsonApi data' onPress={() => getData()} />
      <Text>{results.length}</Text>
      <Text>{results && results[0] && results[0].id}</Text>
      <ScrollView>
        {renderData()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  jsonApiScreenWrapperStyle: {
    flex: 1
  }
});

export default JsonApiScreen;
