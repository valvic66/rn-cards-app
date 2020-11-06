import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView, ActivityIndicator } from "react-native";
import api from '../api/api';

const JsonApiScreen = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    try {
      const res = await api.get('/photos');
      setResults(res.data);
      setLoading(false);
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

  useEffect(() => {
    getApiData();
  }, []);

  if(loading) {
    return <ActivityIndicator animating={loading} size='large' style={styles.activityIndicatorStyle} />  
  }

  return (
    <View style={styles.jsonApiScreenWrapperStyle}>
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
  },
  activityIndicatorStyle: {
    flex: 1
  }
});

export default JsonApiScreen;
