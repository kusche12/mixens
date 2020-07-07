import firebase from 'firebase';
import _ from 'lodash';
//     let rootRef = firebase.database().ref('/users/' + userId + '/mixes');
export const updateMixFB = async (mix, userId) => {
    let index = null;
    let rootRef = firebase.database().ref('/users/' + userId + '/mixes');
    await rootRef.on('value', snapshot => {
        let data = snapshot.val();
        index = _.findIndex(data.mixes, { id: mix.id });
    }, err => {
        console.log("The read failed: " + err.code);
    });
    await console.log(index);
    await firebase.database().ref('/users/' + userId + '/mixes/mixes/').child(index).set({ mix });
};

export const createMixFB = (mix, userId) => {

};

export const deleteMixFB = (mix, userId) => {
    let index = null;
    let rootRef = firebase.database().ref('/users/' + userId + '/mixes');
    rootRef.on('value', snapshot => {
        let data = snapshot.val();
        index = _.findIndex(data.mixes, { id: mix.id });
    }, err => {
        console.log("The read failed: " + err.code);
    });
    firebase.database().ref('/users/' + userId + '/mixes/mixes/' + index).remove();
};