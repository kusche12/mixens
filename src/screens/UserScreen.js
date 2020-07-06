import React from 'react'
import { View, Text } from 'react-native';

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
            <View>
                <Text>UserScreen</Text>
                <Text>UserScreen</Text>
                <Text>UserScreen</Text>
                <Text>UserScreen</Text>
            </View>
        );
    }
}

export default UserScreen;