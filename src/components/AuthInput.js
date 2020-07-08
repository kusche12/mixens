import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const AuthInput = ({ email, password, handleText}) => {
    return (
        <View>
            <Text style={styles.text}>Confirm your identification to delete your profile</Text>
            <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={text => handleText('email', text)}
                style={styles.input}
            />
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={text => handleText('password', text)}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#666666',
        fontSize: 16
    },  
    input: {
        color: '#C4C4C4',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        fontSize: 20,
        marginVertical: 15,
    },
});

export default AuthInput;