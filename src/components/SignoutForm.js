import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

const SignoutForm = ({ user, email, navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={Platform.isPad ? styles.padTitle : styles.title}>Hello, </Text>
                <Text style={Platform.isPad ? styles.padName : styles.name}>{user}!</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={Platform.isPad ? styles.padText : styles.text}>{email}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DeleteAccount')}>
                <Text style={Platform.isPad ? [styles.padText, {color: '#64CAF6'}] : [styles.text, {color: '#64CAF6'}]}>Account Settings</Text>
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
    padTitle: {
        marginTop: Dimensions.get('window').height / 8,
        fontSize: 64,
        fontWeight: '500',
        color: '#333333'
    }, 
    name: {
        fontSize: 36,
        fontWeight: '400',
        color: '#666666'
    },
    padName: {
        fontSize: 64,
        fontWeight: '400',
        color: '#666666'
    },
    text: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center'
    },
    padText: {
        fontSize: 32,
        color: '#666666',
        textAlign: 'center'
    },
    textContainer: {
        top: Dimensions.get('window').height / 4
     
    }
});

export default SignoutForm;