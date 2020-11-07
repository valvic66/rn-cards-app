import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text, Image } from 'react-native';

const JsonItem = ({id, title, url}) => {
  return (
    <Card>
      <Text style={styles.idTextStyle}>{id}</Text>
      <Card.Title style={styles.titleTextStyle}>{title}</Card.Title>
      <Image style={styles.imageStyle} source={{uri: url}} />
    </Card>
  )
}

const styles = StyleSheet.create({
  idTextStyle: {
    alignSelf: 'center'
  },
  titleTextStyle: {
    textTransform: 'capitalize',
  },
  imageStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center'  
  }
});

export default JsonItem;