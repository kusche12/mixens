import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import EditAddItem from './EditAddItem';
import EditSingleIngredient from './EditSingleIngredient';

const EditIngredients = ({ ingredients, updateIngredient, addItem }) => {
    return (   
        <View>
            <Text style={styles.title}>INGREDIENTS</Text>
            <FlatList
                style={{ flexGrow: 0 }}
                data={ingredients}
                keyExtractor={({ index }) => index}
                renderItem={({item, index}) => <EditSingleIngredient 
                                                item={item} 
                                                index={index} 
                                                updateIngredient={updateIngredient}
                                                />}
                scrollEnabled={false}
            />
            <EditAddItem item="INGREDIENT" addItem={addItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        fontSize: 14,
        color: '#888888',
        fontWeight: "500"
    }
});

export default EditIngredients;