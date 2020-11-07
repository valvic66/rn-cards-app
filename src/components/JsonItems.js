import React from 'react';
import JsonItem from './JsonItem';
import { LIMIT_API_RESPONSE_ITEMS } from '../constants/JsonApiScreen';
import { StyleSheet, View } from 'react-native';

const JsonItems = ({ results }) => {
  return results.map((result, index) => {
    const { id, title, thumbnailUrl } = result;

    if(index > LIMIT_API_RESPONSE_ITEMS) {
      return null;
    }

    return (
      <View key={index}>
        <JsonItem 
          id={id}
          title={title}
          url={thumbnailUrl}
        />
      </View>
    );
  })
}

const styles = StyleSheet.create({});

export default JsonItems;