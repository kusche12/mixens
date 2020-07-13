import React from 'react';
import { Text, View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';

const IngredientsView = ({ ingredients }) => {
    const WINDOW = useWindowDimensions();

    const renderAmount = ({ item }) => {
        return (
            <View key={item.ingredient}>
                <View style={styles.amount}>
                    { item.amount !== '0' ? <Text style={styles.font1}>{item.amount}</Text> : null}
                    { item.amount2 !== '' ? <Text style={styles.font2}>{item.amount2}</Text> : null}
                    <Text> </Text>
                    <Text style={styles.font2}>{item.unit}</Text>
                </View>
            </View>
        );
    };

    const renderIngredient = ({ item }) => { 
        return <Text style={styles.font1}>{item.ingredient}</Text> 
    };
    
    return (
        <View style={styles.container}>
            <FlatList 
                style={{ left: WINDOW.width * .01 }}
                data={ingredients}
                keyExtractor={item => item.ingredient}
                renderItem={item => renderAmount(item)}
                scrollEnabled={false}
            /> 
            <FlatList 
                style={{ position: 'absolute', left: WINDOW.width * .35 }}
                data={ingredients}
                keyExtractor={item => item.ingredient}
                renderItem={item => renderIngredient(item)}
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    font2: {
        color: '#333333',
        fontSize: 12,
        fontStyle: 'italic'
    }
});

export default IngredientsView;