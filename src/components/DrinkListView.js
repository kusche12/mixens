import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DrinkListView = ({ drink, navigation }) => {

    // Format tags
    let tags = "";
    let index = 0;
    if (drink.tags) {
        if (drink.tags.length == 1) {
            tags += drink.tags[index].title;
        } else if (drink.tags.length > 1) {
            while (index < drink.tags.length - 1) {
                tags += drink.tags[index].title + ", ";
                index++;
            }
            tags += drink.tags[index].title;
        }
    }      

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { drink })}>
            <View style={styles.container}>
                { drink.img 
                ? <Image source={{ uri: drink.img }} style={Platform.isPad ? styles.padImage : styles.image} />
                : <Image source={require('./cocktail.png')} style={Platform.isPad ? styles.padImage : styles.image} />
                }
                <View style={styles.text_container}>
                    <Text style={Platform.isPad ? styles.padTitle : styles.title}>{drink.title}</Text>
                    <Text style={Platform.isPad ? styles.padDesc : styles.desc}>{tags}</Text>
                </View>
                {drink.favorited ?  <FontAwesome name="star" size={Platform.isPad ? 42 : 32} color="#FFD700" style={styles.star} /> : null}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: "#C4C4C4",
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 10,
        position: 'relative'
    },
    padImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
        position: 'relative'
    },
    star: {
        position: 'absolute',
        zIndex: 100,
        right: 10,
        top: 10
    },
    text_container: {
        paddingLeft: 10,
        alignSelf: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: '#333333'
    },
    padTitle: {
        fontSize: 30,
        fontWeight: '500',
        color: '#333333'
    },
    desc: {
        color: '#888888',
        fontStyle: 'italic'
    },
    padDesc: {
        color: '#888888',
        fontStyle: 'italic',
        fontSize: 20
    }
});

export default DrinkListView;