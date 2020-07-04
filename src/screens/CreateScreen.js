import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import {NavigationEvents} from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons'; 

import CreateHeader from '../components/CreateHeader';
import EditImage from '../components/EditImage';
import EditInstructions from '../components/EditInstructions';
import EditList from '../components/EditList';
import EditFavorite from '../components/EditFavorite'
import EditDrinkName from '../components/EditDrinkName';
import DeleteMix from '../components/DeleteMix';
import KeyboardShift from '../components/KeyboardShift';

class CreateScreen extends React.Component {
    static navigationOptions = () => {
        return {
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },
            tabBarIcon: ({ focused, color, size }) => {
                let iconColor = 'gray';
                if (focused) {
                    iconColor = '#64CAF6';
                }
                
                return <FontAwesome5 name="glass-martini-alt" size={26} color={iconColor} />;
            },
            tabBarOptions: {
                activeTintColor: '#64CAF6',
                inactiveTintColor: 'gray'
            }
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            instructions: '',
            ingredients: [{
                id: '1',
                unit: ' ',
                amount: '0',
                amount2: ' ',
                ingredient: ''
            }],
            img: null,
            tags: [{ id: '1', title: '' }],
            favorited: false,
            created: ''
        };
    };

    // Drink is an edit
    componentDidMount() {
        console.log('COMPONENTDIDMOUNT');
        const drink = this.props.navigation.getParam('drink');
        if (drink) { // If it is an edit, update state to correct drink
            this.setState({ id: drink.id, title: drink.title, instructions: drink.instructions, 
                ingredients: drink.ingredients, img: drink.img, tags: drink.tags, 
                favorited: drink.favorited, created: drink.created});
        }
    }

    // Drink is a creation
    createDrinkState = () => {
        console.log('CREATEDRINKSTATE');
        let newId = 0;
        console.log(this.props.drinks.length);
        if (this.props.drinks.length > 0) {
            let drinks = this.props.drinks;
            newId = parseInt(drinks[drinks.length - 1].id) + 1;
        } else {
            newId = 0;
        }
        newId = '' + newId;
        this.setState({ id: newId });
    };

    // Update ingredient amount due to picker and text input
    updateIngredient = (newA, newA2, newU, type, index, newId) => {
        let newIngredients = [...this.state.ingredients];
        newIngredients[index] = { amount: newA, amount2: newA2, unit: newU, ingredient: type, id: newId };
        this.setState({ ingredients: newIngredients });
    };

    // Update tags due to text input
    updateTags = (tag, index, id) => {
        let newTags = [...this.state.tags];
        newTags[index] = { title: tag, id: id };
        this.setState({ tags: newTags });
    }

    // Add item to either the ingredients list or tags list
    addItem = (list) => {
        if (list === 'INGREDIENT') {
            let newId = (this.state.ingredients.length+1).toString();
            let newIngredients = this.state.ingredients.concat({ id: newId, amount: '0', amount2: ' ', unit: ' ', ingredient: '' });
            this.setState({ ingredients: newIngredients });
        } else if (list === 'TAG') {
            let newId = (this.state.tags.length+1).toString();
            let newTags = this.state.tags.concat({ id: newId, title: '' });
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
                {/* Sets the state to be a new creation */}
                { this.state.created == ''
                ? <NavigationEvents onDidFocus={this.createDrinkState}
                                    onDidBlur={() => console.log('ONDDIDBLUR')} />
                : null
                }
                
                <CreateHeader navigation={this.props.navigation} mix={this.state} created={this.state.created} />
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
                    <View style={{ marginBottom: 20}} />
                    <EditFavorite 
                        favorited={this.state.favorited} 
                        handleFavorited={() => this.setState({ favorited: !this.state.favorited})}
                    />
                    <View style={{ marginBottom: 40}} />
                    { this.state.created != '' 
                    ? <DeleteMix navigation={this.props.navigation} mix={this.state} />
                    : null
                    }
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

// Redux Store Passes State To Component
const mapStateToProps = (state) => {
    return {
      drinks: state.drinkReducer,
    };
  };

export default connect(mapStateToProps)(CreateScreen);