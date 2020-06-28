import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const EditInstructions = ({ instructions, handleTextInput }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>INSTRUCTIONS</Text>
            <TextInput 
                placeholder="How do you make this mix?"
                style={styles.input}
                value={instructions}
                multiline={true}
                scrollEnabled={false}
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
        color: '#666666',
        fontSize: 14,
        fontWeight: "600"
    },  
    input: {
        color: '#C4C4C4',
        fontSize: 16,
    }
})

export default EditInstructions;