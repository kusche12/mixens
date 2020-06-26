import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import EditAddItem from './EditAddItem';
import EditSingleIngredient from './EditSingleIngredient';

const EditIngredients = ({ ingredients, updateIngredient, addItem }) => {
    return (   
        <SafeAreaView>
            <Text style={{ paddingLeft: 20, color: '#888888', fontWeight: "500" }}>INGREDIENTS</Text>
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
        </SafeAreaView>
    );
};

export default EditIngredients;