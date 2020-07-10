import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AuthForm = ({ signup, formHandler, handleSignup, handleSignin, navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const renderText = (main, link, button) => {
        return (
            <>
                {/* Either the Sign up or sign in buttons */}
                <TouchableOpacity onPress={() => 
                { signup ? handleSignup(email, password, name) : handleSignin(email, password)} }>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>{button}</Text>
                    </View>
                </TouchableOpacity>
                {/* Switch between sign up and log in */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{main}</Text>
                    <TouchableOpacity onPress={formHandler}>
                        <Text style={[styles.text, styles.link]}>{link}</Text>
                    </TouchableOpacity>
                </View>
                { !signup 
                ? <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <Text style={[styles.text, styles.forgot]}>Forgot password?</Text>
                </TouchableOpacity>
                : null
                }
                
            </>
        );
    };


    return (
        <SafeAreaView>
            <Text style={styles.title}>Save your mixes to the cloud!</Text> 
            <View style={{ height: 50 }} />
            <TextInput 
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            {signup 
            ? <TextInput 
                style={styles.input}
                placeholder="First & Last Name"
                value={name}
                onChangeText={text => setName(text)}
                autoCapitalize="words"
            />
            : null
            }
            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            {signup
            ? renderText('Already have an account?', 'Log in', 'Create an Account')
            : renderText('Don\'t have an account?', 'Sign up', 'Log in')
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 20,
        color: '#666666'
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
        color: '#666666'
    },
    link: {
        color: '#64CAF6',
        marginLeft: 10
    },
    forgot: {
        color: '#64CAF6',
        textAlign: 'center',
        marginTop: 10
    }
});

export default AuthForm;