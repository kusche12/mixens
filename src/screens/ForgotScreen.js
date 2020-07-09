import React from 'react';
import { SafeAreaView, TextInput, Text, 
    TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import firebase from 'firebase';
import 'firebase/auth';

const HEIGHT = Dimensions.get('window').height;

class ForgotScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'User',
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStyle: {
              backgroundColor: '#64CAF6'
            },
            headerTintColor: '#FCFEFF',
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            errorMessage: null
        }
    }

    passwordReset = async => {
        this.setState({ errorMessage: null });
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(() => {
            console.log('Successful password reset')
        })
        .catch(err => {
            this.setState({ errorMessage: err.message });
        })
    }



    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Forgot Password?</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter email"
                        value={this.state.email}
                        onChangeText={(text) => this.setState({email: text})}
                    />
                    <TouchableOpacity onPress={this.passwordReset}>
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                </View>
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: HEIGHT / 4,
        paddingHorizontal: 50
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
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
        marginTop: 40
    },
    textButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    error: {
        color: '#e34d4d',
        marginTop: 16
    }
});

export default ForgotScreen;