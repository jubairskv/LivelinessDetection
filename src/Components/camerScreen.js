// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';

// const CameraScreen = () => {
//   const devices = useCameraDevices();
//   const [device, setDevice] = useState(null);

//   useEffect(() => {
//     if (devices?.back) {
//       setDevice(devices.back);
//     }
//   }, [devices]);

//   const takePicture = async () => {
//     if (device) {
//       const photo = await device.takePhoto();
//       console.log(photo);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {device ? (
//         <Camera style={{ flex: 1 }} device={device} isActive={true} />
//       ) : (
//         <Text>Loading camera...</Text>
//       )}
//       <Button title="Take Picture" onPress={takePicture} />
//     </View>
//   );
// };

// export default CameraScreen;
