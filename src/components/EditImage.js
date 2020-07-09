import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import DefaultPhotoBrowser from './DefaultPhotoBrowser';

const EditImage = ({ img, updateImage }) => {
    const [renderPhotos, setRenderPhotos] = useState(false);
    const takeImage = async () => {
        if (Constants.platform.ios) {
            const rollPermission = await ImagePicker.requestCameraPermissionsAsync();
            if (rollPermission.status !== 'granted') {
                alert('You will not be able to take a picture of your drink without camera access.');
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
                alert('You will not be able to upload a picture of your drink without access to your camera roll.');
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

    const chooseDefault = async (image) => {

        updateImage(image);
    };
    
    const sendAlert = () => {
        Alert.alert(
            "Upload Image",
            "Take a pic of your Mix!",
            [
                {
                    text: "Take a Picture",
                    onPress: () => takeImage()
                },
                {
                    text: "Choose from Camera Roll",
                    onPress: () => chooseImage()
                },
                {
                    text: "Choose from our Library",
                    onPress: () => setRenderPhotos(true)
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
            ],
        );
    }

    return (
        <View style={{ alignItems: 'center' }}>
            { img 
            ? <Image source={{ uri: img }} style={styles.image} />
            : <Image source={require('./cocktail.png')} style={styles.image} />
            }
            <TouchableOpacity onPress={sendAlert}><Text style={styles.text}>Change Image</Text></TouchableOpacity>
            { renderPhotos ? <DefaultPhotoBrowser /> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 125,
        width: 125,
        borderRadius: 10,
    },
    text: {
        color: '#666666',
        fontWeight: '600',
        fontSize: 14
    }
});

export default EditImage;