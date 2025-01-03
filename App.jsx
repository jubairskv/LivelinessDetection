import React from 'react';
import LivelinessDetection from './src/Components/livelinessDetection';
const App = () => {
  return <LivelinessDetection />;
};
export default App;
//add contact code:
// import React, { useEffect } from 'react';
// import { Button } from 'react-native';
// import addNewContact from './addNewContact'; // Import the addNewContact function
// const App = () => {
//   useEffect(() => {
//     // Any setup code here if needed
//   }, []);
//   return (
//     <Button title="Add Contact" onPress={addNewContact} />
//   );
// };
// export default App;




// import React, {useEffect, useState} from 'react';
// import {Button, StyleSheet, View, Text} from 'react-native';
// import {
//   Camera,
//   useCameraPermission,
//   useCameraDevice,
// } from 'react-native-vision-camera';
// import {useFrameProcessor} from 'react-native-vision-camera';
// import {runOnJS} from 'react-native-reanimated';
// import {scanFaces} from 'react-native-vision-camera-face-detector'; // Import face detection scanner
// import PermissionsPage from './src/Components/PermissionsPage';
// import NoCameraDeviceError from './src/Components/noCamerError';

// const App = () => {
//   const {hasPermission, requestPermission} = useCameraPermission();
//   const device = useCameraDevice('front');
//   const [permissionRequested, setPermissionRequested] = useState(false);
//   const [faces, setFaces] = useState([]);

//   useEffect(() => {
//     if (!hasPermission && !permissionRequested) {
//       requestPermission();
//       setPermissionRequested(true);
//     }
//   }, [hasPermission, permissionRequested, requestPermission]);

//   // Frame processor for face detection
//   const frameProcessor = useFrameProcessor(frame => {
//     'worklet';
//     try {
//       const detectedFaces = scanFaces(frame);
//       runOnJS(setFaces)(detectedFaces);
//     } catch (error) {
//       console.error('Error in frame processor:', error);
//     }
//   }, []);

//   if (!hasPermission)
//     return <PermissionsPage onRequestPermission={requestPermission} />;
//   if (device == null) return <NoCameraDeviceError />;

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//         frameProcessor={frameProcessor}
//         frameProcessorFps={5}
//       />

//       <View style={styles.overlay}>
//         <Text style={styles.faceText}>
//           {faces.length > 0
//             ? `Faces detected: ${faces.length}`
//             : 'No faces detected'}
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 10,
//     borderRadius: 10,
//   },
//   faceText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default App;
