import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const SignoutForm = ({ user, email, handleSignout }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Hello, </Text>
                <Text style={styles.name}>{user}!</Text>
            </View>

            <View style={styles.textContainer}>
                <TouchableOpacity onPress={handleSignout}>
                    <View style={styles.button}>
                    <Text style={styles.textButton}>Sign out</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>You are currently signed in using {email}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 50,
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
    button: {
        backgroundColor: '#64CAF6',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    textContainer: {
        position: 'absolute',
        left: (Dimensions.get('window').width / 2) - 170,
        top: Dimensions.get('window').height / 2
    }
});

export default SignoutForm;