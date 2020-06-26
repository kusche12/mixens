import React from 'react'
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/drinkActions';
import { store } from '../store/store';

import EditImage from '../components/EditImage';
import EditIngredients from '../components/EditIngredients';


class CreateScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerLeft:() => <Button title="Cancel" onPress={() => console.log('hello')}  />,
        headerRight: () => <Button title="Done" onPress={() => console.log('done')}/>
    };
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            instructions: '',
            ingredients: [],
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png',
            tags: [],
            favorited: false
        };
    };

    // If it is an edit, update state to correct drink. 
    componentDidMount() {
        const drink = this.props.navigation.getParam('drink');
        if (drink) {
            this.setState({ title: drink.title, instructions: drink.instructions, 
                ingredients: drink.ingredients, img: drink.img, tags: drink.tags, 
                favorited: drink.favorited 
            });
        }
    };

    // Update ingredient amount due to picker and text input
    updateIngredient = (newA, newA2, newU, type, index) => {
        let newIngredients = [...this.state.ingredients];
        newIngredients[index] = { amount: newA, amount2: newA2, unit: newU, ingredient: type };
        this.setState({ ingredients: newIngredients });
    };

    // Add item to either the ingredients list or tags list
    addItem = (list) => {
        if (list === 'ingredients') {
            let newIngredients = this.state.ingredients.concat({ amount: '0', amount2: ' ', unit: ' ', ingredient: '' });
            this.setState({ ingredients: newIngredients });
        }
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <EditImage img={this.state.img} updateImage={image => this.setState({ img: image })} />
                    <View style={{ marginBottom: 20 }} />
                    <EditIngredients 
                        ingredients={this.state.ingredients} 
                        updateIngredient={this.updateIngredient} 
                        addItem={this.addItem}
                    />
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
    },  
});

export default connect(null, actions)(CreateScreen);