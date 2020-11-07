import React from "react";
import { Text, StyleSheet, View, ScrollView, ActivityIndicator, Image } from "react-native";
import useJsonApiResults from '../hooks/useJsonApiResults';
import { LIMIT_API_RESPONSE_ITEMS } from '../constants/JsonApiScreen';

const JsonApiScreen = () => {
  const [ results, loading, error, getApiData ] = useJsonApiResults();

  if(loading) {
    if(error) {
      return <Text style={styles.errorMessageStyle}>{error}</Text>
    }

    return <ActivityIndicator animating={loading} size='large' style={styles.activityIndicatorStyle} />  
  }

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
  },
  errorMessageStyle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: '#f00'
  }
});

export default JsonApiScreen;
