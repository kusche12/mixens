import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;

const EditFavorite = ({ favorited, handleFavorited }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>ADD TO FAVORITES</Text>
            <TouchableWithoutFeedback onPress={handleFavorited}>
                <FontAwesome name="star" size={28} color={ favorited ? "#FFD700" : "#888888"} />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        color: '#666666',
        fontSize: 14,
        fontWeight: "600"
    } 
});

export default EditFavorite;