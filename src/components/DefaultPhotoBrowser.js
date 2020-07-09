import React from 'react';
import PhotoBrowser from 'react-native-photo-browser';
import firebase from 'firebase';
/*
const images = firebase.storage().ref().child('default'); // Map over this for image gallery
    let mediaList = [];
    images.listAll()
    .then(res => {
        res.items.forEach((image, index) => {
            image.getDownloadURL()
            .then((url) => {
                mediaList.push({ photo: url, id: index, caption: '' });
            })
        })
    })  */

const DefaultPhotoBrowser = () => {
    return (
        <PhotoBrowser 
            mediaList={mediaList}
        />
    )
};

export default DefaultPhotoBrowser;