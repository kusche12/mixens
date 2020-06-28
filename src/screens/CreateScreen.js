import React from 'react'
import { View, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { reducerTest, updateMix } from '../actions/drinkActions';
import { store } from '../store/store';

import EditImage from '../components/EditImage';
import EditInstructions from '../components/EditInstructions';
import EditList from '../components/EditList';
import EditFavorite from '../components/EditFavorite'
import EditDrinkName from '../components/EditDrinkName';
import DeleteMix from '../components/DeleteMix';
import KeyboardShift from '../components/KeyboardShift';

class CreateScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Create Mix',
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerLeft:() => <Button title="Cancel" onPress={() => cancel(navigation)} />,
            headerRight: () => <Button title="Done" onPress={() => submit(navigation)} />
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            instructions: '',
            ingredients: [],
            img: null,
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
                    <View style={{ marginBottom: 20}} />
                    <EditFavorite 
                        favorited={this.state.favorited} 
                        handleFavorited={() => this.setState({ favorited: !this.state.favorited})}
                    />
                    <View style={{ marginBottom: 40}} />
                    <DeleteMix navigation={this.props.navigation} />
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

// Cancel all changes and return to detail screen
const cancel = (navigation) => {
    Alert.alert(
        "Discard Changes",
        "Changes to your Mix will not be saved. Do you want to proceed?",
        [
            {
                text: "Discard changes",
                onPress: () => navigation.goBack()
            },
            {
                text: "Continue editing",
                onPress: () => console.log("Cancel Pressed")
            },
        ]
    );
};

// Confirm all changes
const submit = (navigation) => {
    Alert.alert(
        "Submit my Mix",
        "Are you sure you are done making edits to your Mix?",
        [
            {
                text: "Submit my Mix",
                onPress: () => submitHandler(navigation)
            },
            {
                text: "Continue editing",
                onPress: () => console.log("Cancel Pressed")
            },
        ]
    );
};

// Save all changes in state to the new component
const submitHandler = (navigation) => {
    console.log('saving mix...')
}

const mapDispatchToProps = {
    reducerTest,
};


export default connect(null, mapDispatchToProps)(CreateScreen);