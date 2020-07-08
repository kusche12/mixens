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
    static navigationOptions = ({ navigation }) => {
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

    deleteAccount = () => {
        console.log('DELETE ACCOUNT');
        let user = firebase.auth().currentUser;
        /*
        user.reauthenticateWithCredential(credential)
        .then(() => {
            console.log(credential);
        }).catch(err => {
            this.setState({ errorMessage: err.message });
        });
        /*
        user.delete()
        .then(() => {
            // DELETE ALL THEIR DATA FROM FIREBASE
            console.log('Successfully deleted user');
        })
        .catch((error) => {
            console.log('Error deleting user:', error);
        });
        this.props.navigation.navigate('User'); */
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
        .catch(function(error) {
            console.log(error.message)
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
                    { this.props.user.loggedIn 
                    ? <Text style={styles.text}>{this.props.user.user.email}</Text> 
                    : null
                    }
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                    { this.state.renderAuthForm
                    ? <AuthInput style={styles.auth} handleText={this.handleText} email={this.state.email} password={this.state.password} />
                    : null
                    }
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
        width: WIDTH / 2.5,
        height: HEIGHT / 4,
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