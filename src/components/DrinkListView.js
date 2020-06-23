import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DrinkListView = ({ drink }) => {
    drink = drink.item;
    // Format tags
    let tags = "";
    let index = 0;
    while (index < drink.tags.length - 1) {
        tags += drink.tags[index] + ", ";
        index++;
    }
    tags += drink.tags[index];

    return (
        <View style={styles.container}>
            <View>
                {drink.favorited ?  <FontAwesome name="star" size={32} color="#FFE459" style={styles.star} /> : null}
                <Image source={{uri: drink.img}} style={styles.image} /> 
            </View>
            <View style={styles.text_container}>
                <Text style={styles.title}>{drink.title}</Text>
                <Text>{tags}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#C4C4C4",

        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 10,
        position: 'relative'
    },
    star: {
        position: 'absolute',
        zIndex: 100,
        right: 50,
        bottom: 45
    },
    text_container: {

    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    }
});

export default DrinkListView;