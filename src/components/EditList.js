import React from 'react';
import { ScrollView, Text, StyleSheet, Platform, View, Dimensions } from 'react-native';
import EditAddItem from './EditAddItem';
import EditSingleIngredient from './EditSingleIngredient';
import EditSingleTag from './EditSingleTag';

const EditList = ({ type, list, updateList, addItem, deleteItem, updateIngredientType }) => {

    const renderAddItemButton = () => {
        if (type === 'Ingredient') {
            return <EditAddItem item={type} addItem={addItem} />;
        } else if (type === 'Tag' && list.length < 3) {
            return <EditAddItem item={type} addItem={addItem} />;
        } else {
            return <View style={styles.line} />;
        }
    }

    const renderItem = (item, index) => {
        if (type === 'Ingredient') {
            return <EditSingleIngredient item={item} index={index} key={index}
                updateIngredient={updateList} updateIngredientType={updateIngredientType} deleteItem={deleteItem} />
        } else {
            return <EditSingleTag item={item} index={index} key={index} updateTag={updateList} deleteItem={deleteItem} />
        }
    }
    return (
        <View style={styles.container}>
            <Text style={Platform.isPad ? styles.padTitle : styles.title}>{type.toUpperCase()}S</Text>
            <ScrollView>
                {list.map((item, index) => {
                    return renderItem(item, index);
                })}
            </ScrollView>
            {renderAddItemButton()}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        alignSelf: 'flex-start',
        marginLeft: 38,
        fontSize: 14,
        color: '#666666',
        fontWeight: "600"
    },
    padTitle: {
        alignSelf: 'flex-start',
        marginLeft: 0,
        fontSize: 24,
        color: '#666666',
        fontWeight: "600"
    },
    container: {
        width: Dimensions.get('window').width * .9
    },
    line: {
        borderTopWidth: 1,
        borderTopColor: '#C4C4C4',
    }
});

export default EditList;