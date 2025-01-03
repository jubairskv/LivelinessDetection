// PermissionsPage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const PermissionsPage = ({ onRequestPermission }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Camera permission is required to use this feature.</Text>
      <Button title="Request Permission" onPress={onRequestPermission} />
    </View>
  );
};

export default PermissionsPage;
