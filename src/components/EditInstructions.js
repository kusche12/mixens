import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const EditInstructions = ({ instructions, handleTextInput }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>INSTRUCTIONS</Text>
            <TextInput 
                style={styles.input}
                value={instructions}
                multiline={true}
                onChangeText={value => handleTextInput(value, 'instructions')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
        paddingLeft: 20,
        paddingRight: 50,
    },
    title: {
        color: '#888888',
        fontSize: 14,
        fontWeight: "500"
    },  
    input: {
        color: '#C4C4C4',
        fontSize: 16,
    }
})

export default EditInstructions;