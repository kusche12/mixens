import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import EditAddItem from './EditAddItem';
import EditSingleIngredient from './EditSingleIngredient';
import EditSingleTag from './EditSingleTag';

const EditList = ({ type, list, updateList, addItem }) => {
    const renderItem = (item, index) => {
        if (type === 'INGREDIENT') {
            return <EditSingleIngredient item={item} index={index} key={index} updateIngredient={updateList} />
        } else {
            return <EditSingleTag item={item} index={index} key={index} updateTag={updateList} />
        }
    }
    return (   
        <>
            <Text style={styles.title}>{type}S</Text>
            <ScrollView>
                {list.map((item, index) => { 
                    return renderItem(item, index);
                })}
            </ScrollView>
            <EditAddItem item={type} addItem={addItem} />
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        alignSelf: 'flex-start',
        marginLeft: 38,
        fontSize: 14,
        color: '#666666',
        fontWeight: "600"
    }
});

export default EditList;