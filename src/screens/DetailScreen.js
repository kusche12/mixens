import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import IngredientsView from '../components/IngredientsView';
import TagView from '../components/TagView';

const WIDTH = Dimensions.get('window').width;

class DetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'My Mixes',
            headerRight: () => 
            <TouchableOpacity onPress={() => navigation.navigate('Create', { drink: navigation.getParam('drink') })}>
                <FontAwesome5 name="edit" size={24} style={{ marginRight: 10 }}/>   
            </TouchableOpacity>
        }
    }

    render() {
        const drink = this.props.navigation.getParam('drink');
        return (
            <View style={styles.container}>
                <Image source={{uri: drink.img}} style={styles.image} /> 
                <View style={styles.title_star_container}>
                    {drink.favorited ?  <FontAwesome name="star" size={28} color="#FFD700" style={styles.star} /> : null}
                    <Text style={styles.title}>{drink.title}</Text>
                    {drink.favorited ?  <FontAwesome name="star" size={28} color="#FFD700" style={styles.star} /> : null}
                </View>
                <View style={styles.line} />
                <IngredientsView ingredients={drink.ingredients} style={styles.ingredient} />
                <Text style={{marginTop: 24, marginBottom: 48}}>{drink.instructions}</Text>
                <TagView tags={drink.tags} />
                <Text style={styles.created}>Created on {drink.created}</Text>
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        flex: 1
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10
    },
    title: {
        color: '#333333',
        fontSize: 26,
        fontWeight: '500',
        marginTop: 12,
        marginBottom: 12
    },
    created: {
        color: '#C4C4C4',
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 12
    },
    line: {
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        width: WIDTH * .8,
        marginBottom: 12
    },
    title_star_container: {
        display: 'flex',
        flexDirection: 'row'
    },
    star: {
        position: 'relative',
    }
});

export default DetailScreen;