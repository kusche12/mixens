import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import SegmentedPicker from 'react-native-segmented-picker';
import PickerOptions from '../api/PickerOptions';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

const EditSingleIngredient = ({ item, updateIngredient, index }) => {
    const [showPicker, setShowPicker] = useState(false);
    const [type, setType] = useState(item.ingredient);
    
    console.log('HELLOOOOOOOOOOO')
    console.log(item);
    
    // Handle update for the amount and unit of the ingredient
    const onPickerConfirm = ( selections ) => {
        let newAmount = selections.column1.label;
        let newAmount2 = selections.column2.label;
        let newUnit = selections.column3.label;
        
        updateIngredient(newAmount, newAmount2, newUnit, item.ingredient, index);
        setShowPicker(false);
    }

    return (
        <View style={styles.container}>
            <Grid>
                {/* Amount and Unit */}
                <Col size={1}>
                    <TouchableWithoutFeedback onPress={() => setShowPicker(!showPicker)}>
                        <View style={styles.amount}>
                        { item.amount !== '0' ? <Text style={styles.font1}>{item.amount}</Text> : null}
                        <Text style={styles.font2}>{item.amount2}</Text>
                        <Text> </Text>
                        <Text style={styles.font2}>{item.unit}</Text>
                        <Ionicons name="ios-arrow-down" size={16} color="#C4C4C4" style={styles.arrow} />
                        </View>
                    </TouchableWithoutFeedback>
                </Col>

                {/* Ingredient type */}
                <Col size={2}>
                    <View style={styles.ingredient}>
                    <TextInput 
                        style={styles.ingredientText} 
                        autoCapitalize="words" 
                        value={type} 
                        onChangeText={(text) => setType(text)}
                        onEndEditing={word => updateIngredient(item.amount, item.amount2, item.unit, word.nativeEvent.text, index)}
                    />
                    </View>
                </Col>
            </Grid>
            <SegmentedPicker
                ref={React.createRef()}
                onConfirm={onPickerConfirm}
                onCancel={() => setShowPicker(!showPicker)}
                visible={showPicker}
                options={PickerOptions}
                defaultSelections={{ column1: item.amount, column2: item.amount2, column3: item.unit }}
                toolbarBackground="#64CAF6"
                toolbarBorderColor="#56b9e3"
                confirmTextColor="white"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
        borderTopWidth: 1,
        borderTopColor: '#C4C4C4',
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingVertical: 5
    },  
    ingredientText: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#C4C4C4'
    },
    ingredient: {
        paddingLeft: 10,
        borderLeftColor: '#C4C4C4',
        borderLeftWidth: 1,
        paddingVertical: 5
    },
    font1: {
        color: '#C4C4C4',
        fontSize: 20,
        fontStyle: 'italic'
    },
    font2: {
        color: '#C4C4C4',
        fontSize: 16,
        fontStyle: 'italic',
    },
    arrow: {
        position: 'absolute',
        top: 10,
        right: 5
    }
});

export default EditSingleIngredient;