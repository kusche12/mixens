import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const EditImage = ({ img, updateImage, navigation }) => {
  const takeImage = async () => {
    if (Constants.platform.ios) {
      const rollPermission = await ImagePicker.requestCameraPermissionsAsync();
      if (rollPermission.status !== 'granted') {
        alert(
          'You will not be able to take a picture of your drink without camera access. Please allow Camera access in your iOS Application Settings.'
        );
      } else {
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          updateImage(result.uri);
        }
      }
    }
  };

  const chooseImage = async () => {
    if (Constants.platform.ios) {
      const rollPermission = await ImagePicker.requestCameraRollPermissionsAsync();
      if (rollPermission.status !== 'granted') {
        alert(
          'You will not be able to upload a picture of your drink without access to your camera roll. Please allow Camera Roll access in your iOS Application Settings.'
        );
      } else {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          updateImage(result.uri);
        }
      }
    }
  };

  const sendAlert = () => {
    Alert.alert('Upload Image', 'Take a pic of your Mix!', [
      {
        text: 'Take a Picture',
        onPress: () => takeImage(),
      },
      {
        text: 'Choose from Camera Roll',
        onPress: () => chooseImage(),
      },
      {
        text: 'Choose from our Gallery',
        onPress: () => navigation.navigate('Image', { updateImage }),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
    ]);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      {img ? (
        <Image source={{ uri: img }} style={ Platform.isPad ? styles.ipadImage : styles.image} />
      ) : (
        <Image source={require('./cocktail.png')} style={ Platform.isPad ? styles.ipadImage : styles.image} />
      )}
      <TouchableOpacity onPress={sendAlert}>
        <Text style={ Platform.isPad ? styles.ipadText : styles.text}>Change Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 125,
    width: 125,
    borderRadius: 10,
  },
  ipadImage: {
    height: 250,
    width: 250,
    borderRadius: 10,
  },
  text: {
    color: '#666666',
    fontWeight: '600',
    fontSize: 14,
  },
  ipadText: {
    color: '#666666',
    fontWeight: '600',
    fontSize: 20,
  }
});

export default EditImage;
