import React from 'react'
import { View, Text } from 'react-native';

class SearchScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'Search',
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
                <Text>SearchScreen</Text>
                <Text>SearchScreen</Text>
                <Text>SearchScreen</Text>
                <Text>SearchScreen</Text>
            </View>
        );
    }
}

export default SearchScreen;