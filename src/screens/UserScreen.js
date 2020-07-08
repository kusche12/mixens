import React from 'react'
import { SafeAreaView, Dimensions, StyleSheet, Text, Button } from 'react-native';
import AuthForm from '../components/AuthForm';
import SignoutForm from '../components/SignoutForm';
import { connect } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/auth';

const HEIGHT = Dimensions.get('window').height;

class UserScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'User',
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStyle: {
              backgroundColor: '#64CAF6'
            },
            headerTintColor: '#FCFEFF'
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            signup: true,
            errorMessage: null,
        };
    };

    handleSignup = (email, password, name) => {
        this.setState({ errorMessage: null });
        // Create user
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // Save user's name and email
                firebase.database().ref('/users/' + user.user.uid + '/username').set({
                    name: name,
                    email: email
                }); 
                // Save user's drinks
                let mixes = this.props.mixes
                console.log(mixes.mixes);
                firebase.database().ref('/users/' + user.user.uid).child('mixes').set(mixes); 
            })
            .catch((error) => {
                let errorMessage = error.message;
                this.setState({ errorMessage });
        });
    }

    handleSignin = (email, password) => {
		this.setState({ errorMessage: null });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                let mixes = this.props.mixes
                firebase.database().ref('/users/' + user.user.uid).child('mixes').set(mixes); 
            })
			.catch((error) => {
				this.setState({ errorMessage: error.message });
        });
    }
    
    handleSignout = () => {
        this.setState({ errorMessage: null });
        firebase.auth().signOut()
        .catch(function(error) {
            this.setState({ errorMessage: error.message });
        });
    }
    
    render() {
        let user = this.props.user;
        let name = '';     
        if (this.props.user.loggedIn) {
            let rootRef = firebase.database().ref('/users/' + this.props.user.user.uid + '/username');
            rootRef.on("value", (snapshot) => {
                let data = snapshot.val();
                if (data.name) {
                    name = data.name;
                } else {
                    name = data.email
                }
            }, err => {
                console.log("The read failed: " + err.code);
            });
        } 

        return (
            <SafeAreaView style={styles.container}>
                {user.loggedIn
                ? <SignoutForm 
                    user={name}
                    email={user.user.email}
                    handleSignout={this.handleSignout}
                />
                : <AuthForm 
                    signup={this.state.signup} 
                    formHandler={() => this.setState({ signup: !this.state.signup })} 
                    handleSignup={this.handleSignup} handleSignin={this.handleSignin}
                /> 
                }
                <Text style={styles.error}>{this.state.errorMessage}</Text>
                <Button title="DEV TEST" onPress={() => console.log(this.props.mixes)} />
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 1/5 * HEIGHT,
        paddingHorizontal: 50
    },
    error: {
        color: '#e34d4d',
        marginTop: 16
    }
});

const mapStateToProps = (state) => { 
    return {
        user: state.authReducer,
        mixes: state.drinkReducer
    }
};

export default connect(mapStateToProps)(UserScreen);