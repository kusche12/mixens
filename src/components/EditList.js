import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import EditAddItem from './EditAddItem';
import EditSingleIngredient from './EditSingleIngredient';
import EditSingleTag from './EditSingleTag';

const EditList = ({ type, list, updateList, addItem }) => {
    const renderItem = (item, index) => {
        if (type === 'INGREDIENT') {
            return <EditSingleIngredient item={item} index={index} updateIngredient={updateList} />
        } else {
            return <EditSingleTag item={item} index={index} updateTag={updateList} />
        }
    }
    return (   
        <View>
            <Text style={styles.title}>{type}S</Text>
            <FlatList
                style={{ flexGrow: 0 }}
                data={list}
                keyExtractor={({ index }) => index}
                renderItem={({item, index}) => renderItem(item, index)}
            />
            <EditAddItem item={type} addItem={addItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        fontSize: 14,
        color: '#666666',
        fontWeight: "600"
    }
});

export default EditList;