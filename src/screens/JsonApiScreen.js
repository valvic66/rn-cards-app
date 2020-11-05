import React, { useState } from "react";
import { Text, StyleSheet, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { Button } from 'react-native-elements';
import api from '../api/api';

const JsonApiScreen = () => {
  const [results, setResults] = useState([]);
  const [isCallStarted, setCallStart] = useState(false);

  const getApiData = async () => {
    try {
      const res = await api.get('/photos');
      setResults(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  const renderApiData = () => {
    return results.map((result, index) => {
      if(index > 100) {
        return null;
      }
      return (
      <View key={index}>
        <Text>ID: {result.id}</Text>
        <Image style={{width: 200, height: 200}} source={{uri: result.thumbnailUrl}} />
      </View>)
    })
  }

  const isLoading = results.length === 0;

  return (
    <View style={styles.jsonApiScreenWrapperStyle}>
      <Button title='GET DATA' onPress={() => {
          getApiData();
          setCallStart(true);
        }}
      />
      {isCallStarted && <ActivityIndicator animating={isLoading} size='large'/>}
      {results.length > 0 && <Text style={{textAlign: 'center'}}>{results.length} results loaded</Text>}
      <ScrollView>
        {renderApiData()}
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
