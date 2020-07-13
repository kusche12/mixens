import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TagListView = ({ tag, index, navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('List', { tag })}>
            <View style={ index % 2 == 0 ? [styles.highlight, styles.container] : styles.container}>
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
        paddingLeft: 40,
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
    },
    highlight: {
        backgroundColor: '#F5F5F5'
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        color: '#333333'
    },
    amount: {
        position: 'absolute',
        right: 60,
        top: 12,
    }
});

export default TagListView;