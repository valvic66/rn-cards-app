import React from "react";
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import useJsonApiResults from '../hooks/useJsonApiResults';

const JsonApiScreen = () => {
  const [ results, loading, renderApiData ] = useJsonApiResults();

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
