import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TagListView = ({ tag }) => {

    return (
        <TouchableOpacity onPress={() => console.log('NAVIGATE TO THE LIST OF ALL DRINKS OF THIS TAG')}>
            <View style={styles.container}>
                <Text style={styles.text}>{tag[0]}</Text>
                <Text style={[styles.text, styles.amount]}>({tag[1]})</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
    },
    text: {
        fontSize: 22,
        fontWeight: '400',
        color: '#333333'
    },
    amount: {
        position: 'absolute',
        right: 60,
        top: 8
    }
});

export default TagListView;