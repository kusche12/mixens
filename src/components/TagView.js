import React from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TagView = ({ tags, favorited }) => {
    const renderStar = () => {
        return (
            <TouchableOpacity>
                <View style={styles.tag}>
                <FontAwesome name="star" size={16} color="#FFFFFF" style={styles.star} />
                </View>
            </TouchableOpacity>
        );
    };

    const renderTag = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.tag}>
                    <Text style={{ color: 'white' }}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ height: 30}}>
            <FlatList 
                data={tags}
                keyExtractor={tag => tag.id}
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
        backgroundColor: '#AEAEAE',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 6,
        marginLeft: 6
    },
    star: {
        marginHorizontal: 8
    },
});

export default TagView;