import React from 'react';
import { Text, View, StyleSheet, FlatList, useWindowDimensions, Platform, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const IngredientsView = ({ ingredients }) => {
    const WINDOW = useWindowDimensions();

    const renderAmount = ({ item }) => {
        return (
            <View style={Platform.isPad ? styles.padContainer : null} key={item.ingredient}>
                <View style={styles.amount}>
                    {item.amount !== '0' ? <Text style={Platform.isPad ? styles.padFont1 : styles.font1}>{item.amount}</Text> : null}
                    <Text> </Text>
                    {item.amount2 !== '' ? <Text style={Platform.isPad ? styles.padFont2 : styles.font1}>{item.amount2}</Text> : null}
                    <Text> </Text>
                    <Text style={Platform.isPad ? styles.padFont2 : styles.font1}>{item.unit}</Text>
                </View>
            </View>
        );
    };

    const renderIngredient = ({ item }) => {
        return <Text style={Platform.isPad ? styles.padFont1 : styles.font1}>{item.ingredient}</Text>
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={{ left: WINDOW.width * .01 }}
                data={ingredients}
                keyExtractor={(item, index) => index}
                renderItem={item => renderAmount(item)}
                scrollEnabled={false}
            />
            <FlatList
                style={Platform.isPad ? { position: 'absolute', left: WINDOW.width * .5 } : { position: 'absolute', left: WINDOW.width * .35 }}
                data={ingredients}
                keyExtractor={(item, index) => index}
                renderItem={item => renderIngredient(item)}
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .6,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    padContainer: {
        paddingLeft: 250
    },
    amount: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    font1: {
        color: '#333333',
        fontSize: 16,
        fontStyle: 'italic'
    },
    padFont1: {
        color: '#333333',
        fontSize: 28,
        fontStyle: 'italic'
    },
    font2: {
        color: '#333333',
        fontSize: 12,
        fontStyle: 'italic'
    },
    padFont2: {
        color: '#333333',
        fontSize: 22,
        fontStyle: 'italic'
    }
});

export default IngredientsView;