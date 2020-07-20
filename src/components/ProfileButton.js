import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';

const ProfileButton = ({ callback, text, color }) => {
    return (
        <TouchableOpacity onPress={callback}>
            <View style={Platform.isPad ? [styles.padButton, {backgroundColor: color}] : [styles.button, {backgroundColor: color}]}>
                <Text style={Platform.isPad ? styles.padTextButton : styles.textButton}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        width: 225,
        alignItems: 'center',
    },
    padButton: {
        borderRadius: 5,
        paddingVertical: 14,
        width: 300,
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    padTextButton: {
        color: 'white',
        fontSize: 26,
        fontWeight: '500'
    },
});

export default ProfileButton;