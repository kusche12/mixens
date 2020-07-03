import React from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import dateFormat from 'dateformat';

const CreateHeader = ({ navigation, mix, updateMix, createMix, created }) => {
    // Cancel all changes and return to detail screen
    const cancel = () => {
        Alert.alert(
            "Cancel",
            "Changes to your Mix will not be saved. Do you want to proceed?",
            [
                {
                    text: "Discard changes",
                    onPress: () => cancelHandler()
                },
                {
                    text: "Continue editing",
                    onPress: () => console.log("Cancel Pressed")
                },
            ]
        );
    };

    const cancelHandler = () => {
        if (created == '') {
            navigation.navigate('List');
        } else {
            navigation.goBack();
        }
    }

    // Confirm all changes
    const submit = () => {
        if (mix.title == '') {
            Alert.alert(
                "Hang on!",
                "You must name your Mix before submitting",
                []
            );
        } else {
            Alert.alert(
                "Submit my Mix",
                "Are you sure you are done making edits to your Mix?",
                [
                    {
                        text: "Submit my Mix",
                        onPress: () => submitHandler()
                    },
                    {
                        text: "Continue editing",
                        onPress: () => console.log("Cancel Pressed")
                    },
                ]
            );
        }
    };

    // Error handle and push changes from state to redux storage
    const submitHandler = () => {
        deleteEmptyIngredients();
        deleteEmptyTags();

        if (created == '') { // New drink.
            let now = new Date();
            let newDate = dateFormat(now, 'mmmm dS, yyyy');
            mix.created = newDate;
            createMix(mix);
            navigation.navigate('List');
        } else {
            updateMix(mix);
            navigation.navigate('List');
        }
    };
    const deleteEmptyIngredients = () => {
        let allIngredients = [...mix.ingredients];
        mix.ingredients.forEach((item, index) => {
            if (item.unit == ' ' && item.amount == '0' && item.amount2 == ' ' && item.ingredient == '') {
                allIngredients.splice(index, 1);
            }
        });
        mix.ingredients = allIngredients;
    }
    const deleteEmptyTags = () => {
        let allTags = [...mix.tags];
        mix.tags.forEach((item, index) => {
            if (item.title == '') {
                allTags.splice(index, 1);
            }
        });
        mix.tags = allTags;
    }

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
        fontSize: 18,
        fontWeight: '600'
    }
});

export default connect(null, actions)(CreateHeader);