import { NativeModules } from 'react-native';

const { MyNativeModule } = NativeModules;

const addNewContact = () => {
  // Request permission to write contacts
  MyNativeModule.requestWriteContactsPermission()
    .then((permissionGranted) => {
      if (!permissionGranted) {
        console.log('Permission not granted');
        return;
      }

      // Proceed to add contact if permission granted
      return MyNativeModule.addContact('Jubair K', '+916381650661');
    })
    .then((result) => {
      console.log('Contact added successfully:', result); // Logs the success message from the native module
    })
    .catch((error) => {
      console.error('Error adding contact:', error); // Logs any error encountered during the process
    });
};

export default addNewContact;
