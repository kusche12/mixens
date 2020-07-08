import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const SignoutForm = ({ user, email, navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Hello, </Text>
                <Text style={styles.name}>{user}!</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>{email}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DeleteAccount')}>
                <Text style={[styles.text, {color: '#64CAF6'}]}>Account Settings</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: Dimensions.get('window').height / 8,
        fontSize: 32,
        fontWeight: '500',
        color: '#333333'
    }, 
    name: {
        fontSize: 36,
        fontWeight: '400',
        color: '#666666'
    },
    text: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center'
    },
    textContainer: {
        position: 'absolute',
        left: (Dimensions.get('window').width / 8),
        top: Dimensions.get('window').height / 1.9
    }
});

export default SignoutForm;