import React from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
const TagView = ({ tags }) => {
    
    const renderTag = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.tag}>
                    <Text style={{ color: 'white' }}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ height: 30}}>
            <FlatList 
                data={tags}
                keyExtractor={tag => tag}
                renderItem={tag => renderTag(tag)}
                horizontal
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        backgroundColor: '#C4C4C4',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 6,
        marginLeft: 6
    }
});

export default TagView;