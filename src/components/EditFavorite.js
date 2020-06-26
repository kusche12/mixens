import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;

const EditFavorite = () => {

    return (
        <View style={styles.container}>
            <Text>ADD TO FAVORITES</Text>
            <TouchableWithoutFeedback>
                <FontAwesome name="star" size={28} color="#888888" />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
        borderTopWidth: 1,
        borderTopColor: '#C4C4C4',
    },
});

export default EditFavorite;