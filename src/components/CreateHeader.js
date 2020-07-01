import React from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

const CreateHeader = ({ navigation, mix, updateMix }) => {
    // Cancel all changes and return to detail screen
    const cancel = () => {
        Alert.alert(
            "Cancel",
            "Changes to your Mix will not be saved. Do you want to proceed?",
            [
                {
                    text: "Discard changes",
                    onPress: () => navigation.goBack()
                },
                {
                    text: "Continue editing",
                    onPress: () => console.log("Cancel Pressed")
                },
            ]
        );
    };

    // Confirm all changes
    const submit = (navigation) => {
        Alert.alert(
            "Submit my Mix",
            "Are you sure you are done making edits to your Mix?",
            [
                {
                    text: "Submit my Mix",
                    onPress: () => submitHandler(navigation)
                },
                {
                    text: "Continue editing",
                    onPress: () => console.log("Cancel Pressed")
                },
            ]
        );
    };

    // Push changes from state to redux storage
    const submitHandler = () => {
        updateMix(mix);
        navigation.navigate('List');
    };

    return (
        <View style={styles.container}>
            <Button title="Cancel" onPress={() => cancel()}/>
            <Text style={styles.title}>Create Mix</Text>
            <Button title="Submit" onPress={() => submit()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 5,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4'
    },
    title: {
        fontSize: 1,
        fontWeight: '600'
    }
});

export default connect(null, actions)(CreateHeader);