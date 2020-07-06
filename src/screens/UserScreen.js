import React from 'react'
import { SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const WIDTH = Dimensions.get('window').width;
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AuthForm authType="Sign Up" />
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 1/5 * HEIGHT,
        paddingHorizontal: 50
    }
});

export default UserScreen;