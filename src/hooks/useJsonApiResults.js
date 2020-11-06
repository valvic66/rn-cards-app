import React, { useState, useEffect } from "react";
import api from '../api/api';
import { View, Text, Image } from 'react-native';
import { ERROR_MESSAGE, LIMIT_API_RESPONSE_ITEMS } from '../constants/JsonApiScreen';

export default () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getApiData = async () => {
    try {
      const res = await api.get('/photos');
      setResults(res.data);
      setLoading(false);
    } catch(err) {
      console.error(err);
      setError(ERROR_MESSAGE);
    }
  };

  const renderApiData = () => {
    return results.map((result, index) => {
      if(index > LIMIT_API_RESPONSE_ITEMS) {
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

  return [results, loading, error, renderApiData];
}
