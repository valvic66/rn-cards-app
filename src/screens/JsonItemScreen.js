import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import api from '../api/api';
import JsonItem from '../components/JsonItem';

const JsonItemScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    try {
      const result = await api.get(`/photos/${id}`);
      setResult(result.data);
    } catch(err) {
      console.error(err);
    }
  }

  useState(() => {
    getResult(id);
  }, []);

  if(!result) {
    return null;
  }

  return (
    <View style={styles.jsonItemScreenWrapperStyle}>
      <JsonItem
        id={result.id}
        title={result.title}
        url={result.thumbnailUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  jsonItemScreenWrapperStyle: {
    flex: 1
  },
});

export default JsonItemScreen;