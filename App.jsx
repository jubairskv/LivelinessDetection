import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
} from 'react-native-vision-camera'; // Correct imports//
// import addNewContact from './addNewContact'; // Import the addNewContact function
import PermissionsPage from './src/Components/PermissionsPage';
import NoCameraDeviceError from './src/Components/noCamerError'; // Import the new error component

const App = () => {
  // Camera permissions handling
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('front');
  const [permissionRequested, setPermissionRequested] = useState(false);

  useEffect(() => {
    // Request permission when the app loads if not granted
    if (!permissionRequested) {
      requestPermission();
      setPermissionRequested(true);
    }
  }, [permissionRequested]);

  // If camera permission is not granted, show permission page
  if (!hasPermission)
    return <PermissionsPage onRequestPermission={requestPermission} />;

  // If no camera device is found, show error
  if (device == null) return <NoCameraDeviceError />;

  return (
    <View style={styles.container}>
      {/* Camera component */}
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      {/* Add contact button */}
      {/* <Button title="Add Contact" onPress={addNewContact} /> */}
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

export default App;
