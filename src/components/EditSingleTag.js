import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, Platform, TouchableWithoutFeedback } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Feather } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;

const EditSingleTag = ({ item, index, updateTag, deleteItem }) => {
    return (
        <View style={styles.container}>
            <Grid>
                <Col size={7}>
                    <TextInput
                        style={Platform.isPad ? styles.padText : styles.text}
                        autoCapitalize="words"
                        value={item.title}
                        onChangeText={text => updateTag(text, index, item.id)}
                    />
                </Col>
                <Col size={1}>
                    <View style={styles.delete}>
                        <TouchableWithoutFeedback onPress={() => deleteItem("Tag", item.id)}>
                            <Feather name="x" size={Platform.isPad ? 26 : 24} color="#C4C4C4" />
                        </TouchableWithoutFeedback>
                    </View>
                </Col>
            </Grid>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
        borderTopWidth: 1,
        borderTopColor: '#C4C4C4',
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#C4C4C4',
        paddingVertical: 5,
        paddingLeft: 20
    },
    delete: {
        paddingVertical: 5
    },
    padText: {
        fontSize: 26,
        fontStyle: 'italic',
        color: '#C4C4C4',
        paddingVertical: 5,
        paddingLeft: 20
    }
});

export default EditSingleTag;