import React from 'react'
import { View, Button, StyleSheet, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/drinkActions';
import { store } from '../store/store';

import EditImage from '../components/EditImage';
import EditInstructions from '../components/EditInstructions';
import EditList from '../components/EditList';
import EditFavorite from '../components/EditFavorite'
import KeyboardShift from '../components/KeyboardShift';
import EditDrinkName from '../components/EditDrinkName';

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

    // Update tags due to text input
    updateTags = (tag, index) => {
        let newTags = [...this.state.tags];
        newTags[index] = tag;
        this.setState({ tags: newTags });
    }

    // Add item to either the ingredients list or tags list
    addItem = (list) => {
        if (list === 'INGREDIENT') {
            let newIngredients = this.state.ingredients.concat({ amount: '0', amount2: ' ', unit: ' ', ingredient: '' });
            this.setState({ ingredients: newIngredients });
        } else if (list === 'TAG') {
            let newTags = this.state.tags.concat('');
            this.setState({ tags: newTags });
        }
    };

    handleTextInput = (value, type) => {
        if (type === 'title') {
            this.setState({ title: value });
        } else if (type === 'instructions') {
            this.setState({ instructions: value });
        }
    };

    render() {
        return (
            <KeyboardShift>
            {() => (

            <ScrollView>
                <View style={styles.container}>
                    <EditImage img={this.state.img} updateImage={image => this.setState({ img: image })} />
                    <View style={{ marginBottom: 20}} />
                    <EditDrinkName title={this.state.title} handleTextInput={this.handleTextInput} />
                    <View style={{ marginBottom: 40}} />
                    <EditList 
                        list={this.state.ingredients} 
                        updateList={this.updateIngredient} 
                        addItem={this.addItem}
                        type="INGREDIENT"
                    />
                    <View style={{ marginBottom: 40}} />
                    <EditInstructions instructions={this.state.instructions} handleTextInput={this.handleTextInput} />
                    <View style={{ marginBottom: 40}} />
                    <EditList 
                        list={this.state.tags}
                        updateList={this.updateTags}
                        addItem={this.addItem}
                        type="TAG"
                    />
                    <EditFavorite />
                </View>
            </ScrollView>
            )}

            </KeyboardShift>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 50,
    },  
});

export default connect(null, actions)(CreateScreen);