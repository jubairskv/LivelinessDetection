// LivelinessDetection.js
import React from 'react';
import { NativeModules, Button, View, StyleSheet, Platform } from 'react-native';

const { LivelinessModule } = NativeModules;

console.log('Available Native Modules:', Object.keys(NativeModules)); // Debug line

const LivelinessDetection = () => {
  const startDetection = async () => {
    if (!LivelinessModule) {
      console.error('LivelinessModule is not available');
      return;
    }

    try {
      await LivelinessModule.startLivelinessDetection();
    } catch (error) {
      console.error('Error starting liveliness detection:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Start Liveliness Detection" 
        onPress={startDetection} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LivelinessDetection;