import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import SearchInput from 'react-native-search-filter';

const WIDTH = Dimensions.get('window').width;

const SearchFilter = ({ text, handleInput }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="md-search" size={26} color={"#666666"} style={styles.icon} />
            <SearchInput
                style={styles.inputText}
                inputViewStyles={styles.input}
                placeholder='Search...'
                placeholderTextColor="#666666"
                value={text}
                onChangeText={handleInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#64CAF6'
    },
    icon: {
        position: 'absolute',
        zIndex: 100,
        left: 30
    },
    input: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#33A8DB',
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        color: '#666666'
    },
    inputText: {
        fontSize: 18,
        color: '#666666'
    }
});

export default SearchFilter;