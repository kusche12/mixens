import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const EditSingleTag = ({item, index, updateTag}) => {
    const [tag, setTag] = useState(item);
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.text} 
                autoCapitalize="words" 
                value={tag} 
                onChangeText={text => setTag(text)}
                onEndEditing={word => updateTag(word, index)}
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
    text: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#C4C4C4',
        paddingVertical: 5,
        paddingLeft: 20
    },
});

export default EditSingleTag;