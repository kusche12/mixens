import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, Platform } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const EditDrinkName = ({ title, handleTextInput }) => {
    return (
        <View style={styles.container}>
            <Text style={ Platform.isPad ? styles.padTitle : styles.title }>NAME</Text>
            <TextInput 
                placeholder="Mix Name"
                style={ Platform.isPad ? styles.padInput : styles.input}
                value={title}
                autoCapitalize="words" 
                onChangeText={value => handleTextInput(value, 'title')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
    },
    title: {
        color: '#666666',
        fontSize: 14,
        fontWeight: "600"
    },  
    padTitle: {
        color: '#666666',
        fontSize: 24,
        fontWeight: "600"
    },  
    input: {
        color: '#C4C4C4',
        fontSize: 22,
    },
    padInput: {
        color: '#C4C4C4',
        fontSize: 32,
    }
})

export default EditDrinkName;