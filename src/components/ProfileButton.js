import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ProfileButton = ({ callback, text, color }) => {
    return (
        <TouchableOpacity onPress={callback}>
            <View style={[styles.button, {backgroundColor: color}]}>
                <Text style={styles.textButton}>{text}</Text>
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
    textButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
});

export default ProfileButton;