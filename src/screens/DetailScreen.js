import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import IngredientsView from '../components/IngredientsView';
import TagView from '../components/TagView';

const WIDTH = Dimensions.get('window').width;

class DetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: '',
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStyle: {
                backgroundColor: '#64CAF6'
            },
            headerTintColor: '#FCFEFF',
            headerRight: () => 
            <TouchableOpacity onPress={() => navigation.navigate('Create', { drink: navigation.getParam('drink') })}>
                <FontAwesome5 name="edit" size={24} style={{ marginRight: 10 }} color="#FCFEFF" />   
            </TouchableOpacity>
        }
    }

    render() {
        const drink = this.props.navigation.getParam('drink');
        return (
            <ScrollView>
            <View style={styles.container}>
            
                { drink.img 
                ? <Image source={{ uri: drink.img }} style={styles.image} />
                : <Image source={require('./cocktail.png')} style={styles.image} />
                }

                <Text style={styles.title}>{drink.title}</Text>
                <View style={styles.line} />
                <IngredientsView ingredients={drink.ingredients} style={styles.ingredient} />

                { drink.instructions != ''
                ? <Text style={{marginTop: 24, marginBottom: 48}}>{drink.instructions}</Text> 
                : null
                }

                { drink.tags.length > 1 || drink.favorited
                ? <TagView tags={drink.tags} favorited={drink.favorited} navigation={this.props.navigation} /> 
                : null
                }

                <Text style={styles.created}>Created on {drink.created}</Text>
            </View>
            </ScrollView>
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
        marginTop: 12,
        marginBottom: 10
    },
    line: {
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        width: WIDTH * .8,
        marginBottom: 12
    },
});

export default DetailScreen;