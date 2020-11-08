import React from 'react';
import JsonItem from './JsonItem';
import { LIMIT_API_RESPONSE_ITEMS } from '../constants/JsonApiScreen';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const JsonItems = ({ results, navigation }) => {
  return results.map((result, index) => {
    const { id, title, thumbnailUrl } = result;

    if(index > LIMIT_API_RESPONSE_ITEMS) {
      return null;
    }

    return (
      <View key={index}>
        <TouchableOpacity onPress={() => navigation.navigate('JsonItem', { id })}>
          <JsonItem
            id={id}
            title={title}
            url={thumbnailUrl}
          />
        </TouchableOpacity>
      </View>
    );
  })
}

const styles = StyleSheet.create({});

export default withNavigation(JsonItems);