import firebase from 'firebase';
import _ from 'lodash';

export const updateMixFB = async (mix, userId) => {
    let rootRef = firebase.database().ref('/users/' + userId + '/mixes');
    rootRef.child(mix.id).set(mix);
};

export const deleteMixFB = async (mix, userId) => {
    let rootRef = firebase.database().ref('/users/' + userId + '/mixes');
    rootRef.child(mix.id).remove();
};