import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

const EditAddItem = ({ item, addItem }) => {
    return (   
        <View>
            <TouchableOpacity onPress={() => addItem(item)}> 
                <View style={styles.add}>
                    <AntDesign name="pluscircleo" size={Platform.isPad ? 26 : 20} color='#C4C4C4' />
                    <Text style={Platform.isPad ? styles.padAddText : styles.addText}>Add {item}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    add: {
        width: WIDTH * .9,
        padding: 5,
        paddingLeft: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        borderTopWidth: 1,
        borderTopColor: '#C4C4C4',
        alignItems: 'center',
    },
    addText: {
        marginLeft: 20,
        fontSize: 18,
        fontStyle: 'italic',
        color: '#C4C4C4'
    },
    padAddText: {
        marginLeft: 20,
        fontSize: 26,
        fontStyle: 'italic',
        color: '#C4C4C4'
    }
});

export default EditAddItem;