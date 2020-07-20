import React from 'react';
import { View, TextInput, StyleSheet, Text, Platform } from 'react-native';

const AuthInput = ({ email, password, handleText}) => {
    return (
        <View>
            <Text style={Platform.isPad ? styles.padText : styles.text}>Confirm your identification to delete your profile</Text>
            <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={text => handleText('email', text)}
                style={Platform.isPad ? styles.padInput : styles.input}
                autoCapitalize="none"
            />
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={text => handleText('password', text)}
                style={Platform.isPad ? styles.padInput : styles.input}
                secureTextEntry={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#666666',
        fontSize: 16,
        marginTop: 40
    },
    padText: {
        color: '#666666',
        fontSize: 26,
        marginTop: 40
    },
    input: {
        color: '#C4C4C4',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        fontSize: 20,
        marginVertical: 15,
    },
    padInput: {
        color: '#C4C4C4',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        fontSize: 30,
        marginVertical: 15,
    },
});

export default AuthInput;