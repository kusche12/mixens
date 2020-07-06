import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AuthForm = ({ authType }) => {
    const renderText = (main, link) => {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>{main}</Text>
                <TouchableOpacity onPress={() => console.log('callback to rerender the right signup page')}>
                    <Text style={[styles.text, styles.link]}>{link}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView>
            <Text style={styles.title}>{authType}</Text>
            <View style={{ height: 20 }} />
            <TextInput 
                style={styles.input}
                placeholder="Email"
            />
            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableOpacity>
                <View style={styles.button}>
                    {authType === 'Sign Up'
                    ? <Text style={styles.textButton}>Create Account</Text>
                    : <Text style={styles.textButton}>Log In</Text>
                    }
                </View>
            </TouchableOpacity>
            {authType == 'Sign Up'
            ? renderText('Already have an account?', 'Log in!')
            : renderText('Don\'t have an account?', 'Sign up!')
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24
    },
    input: {
        color: '#C4C4C4',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        fontSize: 20,
        marginVertical: 15
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
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        color: '#C4C4C4'
    },
    link: {
        color: '#64CAF6',
        marginLeft: 10
    }
});

export default AuthForm;