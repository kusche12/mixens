import React from 'react';
import { SafeAreaView, TextInput, Text, StyleSheet } from 'react-native';

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
    
    render() {
        return (
            <SafeAreaView>
                <Text>FORGOT SCREEN</Text>
                <Text>FORGOT SCREEN</Text>
                <Text>FORGOT SCREEN</Text>
                <Text>FORGOT SCREEN</Text>
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({});

export default ForgotScreen;