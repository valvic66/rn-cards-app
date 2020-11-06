import React, { useState, useEffect } from "react";
import api from '../api/api';
import { View, Text, Image } from 'react-native';

export default () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    try {
      const res = await api.get('/photos');
      setResults(res.data);
      setLoading(false);
    } catch(error) {
      console.log(error);
    }
  };

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
  };

  useEffect(() => {
    getApiData();
  }, []);

  return [results, loading, renderApiData];
}
