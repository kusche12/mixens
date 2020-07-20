import React from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet, Platform, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TagView = ({ tags, favorited, navigation }) => {
    const renderStar = () => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Search', { tag: ['Favorites'] })}>
                <View style={styles.tag}>
                <FontAwesome name="star" size={Platform.isPad ? 30 : 16} color="#FFFFFF" style={Platform.isPad ? styles.padStar : styles.star} />
                </View>
            </TouchableOpacity>
        );
    };

    const renderTag = (tag) => {
        console.log(tag.title);
        return (
            <TouchableOpacity key={tag.id} onPress={() => navigation.navigate('Search', { tag: tag.title})}>
                <View style={Platform.isPad ? styles.padTag : styles.tag}>
                    <Text style={Platform.isPad ? { color: 'white', fontSize: 26 } : { color: 'white' }}>{tag.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={Platform.isPad ? {height: 50} : { height: 30}}>
            <ScrollView horizontal scrollEnabled={false}>
                {tags.map((tag) => renderTag(tag))}
            </ScrollView>
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
    padTag: {
        backgroundColor: '#AEAEAE',
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingTop: 8,
        paddingBottom: 12,

        marginRight: 6,
        marginLeft: 6
    },
    star: {
        marginHorizontal: 8,
    },
    padStar: {
        marginHorizontal: 8,
        paddingTop: 4,
        paddingBottom: 3
    }
});

export default TagView;