import React from 'react';
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import useJsonApiResults from '../hooks/useJsonApiResults';
import JsonItems from '../components/JsonItems';

const JsonApiScreen = () => {
  const [ results, loading, error ] = useJsonApiResults();

  if(loading) {
    if(error) {
      return <Text style={styles.errorMessageStyle}>{error}</Text>
    }

    return <ActivityIndicator animating={loading} size='large' style={styles.activityIndicatorStyle} />  
  }

  const renderApiData = () => {
    return <JsonItems results={results} />
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
