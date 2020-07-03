import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DrinkListView = ({ drink, navigation }) => {
    drink = drink.item;

    // Format tags
    let tags = "";
    let index = 0;
    if (drink.tags.length == 1) {
        tags += drink.tags[index].title;
    } else if (drink.tags.length > 1) {
        while (index < drink.tags.length - 1) {
            tags += drink.tags[index].title + ", ";
            index++;
        }
        tags += drink.tags[index].title;
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { drink })}>
            <View style={styles.container}>
            { drink.img 
            ? <Image source={{ uri: drink.img }} style={styles.image} />
            : <Image source={require('./cocktail.png')} style={styles.image} />
            }
                <View style={styles.text_container}>
                    <Text style={styles.title}>{drink.title}</Text>
                    <Text style={styles.desc}>{tags}</Text>
                </View>
                {drink.favorited ?  <FontAwesome name="star" size={32} color="#FFD700" style={styles.star} /> : null}
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
    desc: {
        color: '#888888',
        fontStyle: 'italic'
    }
});

export default DrinkListView;