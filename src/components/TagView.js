import React from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TagView = ({ tags, favorited }) => {
    const renderStar = () => {
        return (
            <TouchableOpacity>
                <FontAwesome name="star" size={28} color="#C4C4C4" style={styles.star} />
            </TouchableOpacity>
        );
    };

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
        <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ height: 30}}>
            <FlatList 
                data={tags}
                keyExtractor={tag => tag}
                renderItem={tag => renderTag(tag)}
                horizontal
                scrollEnabled={false}
            />
        </View>
        {favorited ? renderStar() : null}
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
    },
    star: {
        marginLeft: 6
    }
});

export default TagView;