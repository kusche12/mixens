import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const EditDrinkName = ({ title, handleTextInput }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>NAME</Text>
            <TextInput 
                placeholder="Mix Name"
                style={styles.input}
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
        paddingLeft: 20
    },
    title: {
        color: '#666666',
        fontSize: 14,
        fontWeight: "600"
    },  
    input: {
        color: '#C4C4C4',
        fontSize: 22,
    }
})

export default EditDrinkName;