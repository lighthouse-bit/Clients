import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.horizontalLine} />;
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 2,        
    marginVertical: 10,         
    width: "100%"
  },
});

export default HorizontalLine;
