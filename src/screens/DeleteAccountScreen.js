import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert, Dimensions, Image, TextInput } from 'react-native';
import ProfileButton from '../components/ProfileButton';
import firebase from 'firebase';
import 'firebase/auth';
import { connect } from 'react-redux';
import AuthInput from '../components/AuthInput';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

class DeleteAccountScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'Account Settings',
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
            password: null,
            errorMessage: null,
            renderAuthForm: false,
        }
    }

    sendDeleteAlert = () => {
        this.setState({ errorMessage: null });
        if (this.state.renderAuthForm) {
            this.deleteAccount();
        } else {
            Alert.alert(
                "Delete your account?",
                "All of your mixes will be deleted from our database, and you will have no way of recovering them",
                [
                    {
                        text: "Yes, delete my account",
                        onPress: () => this.setState({ renderAuthForm: true })
                    },
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },
                ]
            )
        }
    }

    deleteAccount = async () => {
        const user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
            this.state.email, 
            this.state.password
        );
        await user.reauthenticateWithCredential(credential)
<<<<<<< HEAD
        .catch(err => {
            this.setState({ errorMessage: err.message });
        });
=======
        .then(() => {
            console.log(credential);
        }).catch(err => {
            this.setState({ errorMessage: err.message });
        });

>>>>>>> faf0a0b8b5fa5beb1195361813f5a873350fd996
        await user.delete()
        .then(() => {
            firebase.database().ref('/users/' + this.props.user.user.uid).remove();
        })
        .catch(err => {
            this.setState({ errorMessage: err.message });
        });
        this.props.navigation.navigate('User');
    }

    sendSignoutAlert = () => {
        Alert.alert(
            "Are you sure?",
            "Your mixes will not be saved to our database while you are signed out",
            [
                {
                    text: "Yes, sign me out",
                    onPress: () => this.handleSignout()
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
            ]
        )
    }

    handleSignout = () => {
        firebase.auth().signOut()
<<<<<<< HEAD
        .catch(err => {
            this.setState({ errorMessage: err.message });
=======
        .catch(function(error) {
            console.log(error.message)
>>>>>>> faf0a0b8b5fa5beb1195361813f5a873350fd996
        });
        this.props.navigation.goBack();
    }

    handleText = (type, text) => {
        if (type === 'email') {
            this.setState({ email: text });
        } else {
            this.setState({ password: text });
        }
    }
    
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={require('./settings.png')} style={styles.image} />

                    { this.props.user.loggedIn && !this.state.renderAuthForm 
                    ? <Text style={styles.text}>{this.props.user.user.email}</Text> 
                    : null }

                    { this.state.renderAuthForm
                    ? <AuthInput handleText={this.handleText} email={this.state.email} password={this.state.password} />
                    : null }

                    <Text style={styles.error}>{this.state.errorMessage}</Text>

                    <View style={styles.buttonContainer}>
                        <ProfileButton callback={this.sendSignoutAlert} text="Sign out" color="#64CAF6" />
                        <View style={{ marginTop: 20 }} />
                        <ProfileButton callback={this.sendDeleteAlert} text="Delete Account" color="#f07a7a" />
                    </View>
                </View>
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '500',
        color: '#666666'
    }, 
    image: {
        marginTop: 30,
        width: WIDTH / 3,
        height: HEIGHT / 5.5,
        resizeMode: 'contain',
    },
    buttonContainer: {
        position: 'absolute',
        top: HEIGHT / 1.6
    },
    error: {
        color: '#e34d4d'
    },
});

const mapStateToProps = (state) => { 
    return {
        user: state.authReducer,
    }
};

export default connect(mapStateToProps)(DeleteAccountScreen);