import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NoCameraDeviceError = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No camera device found.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'red',
  },
});

export default NoCameraDeviceError;
