import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

class ListScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>ListScreen</Text>
                <Text>ListScreen</Text>
                <Text>ListScreen</Text>
                <Text>ListScreen</Text>
                <Button title="Detail" style={styles.button} onPress={() => this.props.navigation.navigate('Detail')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        width: 50
    }
});

export default ListScreen;