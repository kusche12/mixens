import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

const DeleteMix = ({ navigation, deleteMix, mix }) => {
    const deleteDrink = () => {
        deleteMix(mix);
        navigation.navigate('List');
    }

    const sendAlert = () => {
        Alert.alert(
            "Are you sure?",
            "This will permanently delete your mix",
            [
                {
                    text: "Delete Mix",
                    onPress: () => deleteDrink()
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
            ]
        )
    }

    return (
        <TouchableOpacity onPress={sendAlert}>
            <Text style={styles.text}>DELETE MIX</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#f07a7a",
        borderColor: '#f07a7a',
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 30
    }
});

export default connect(null, actions)(DeleteMix);