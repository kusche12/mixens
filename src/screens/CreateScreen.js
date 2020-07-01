import React from 'react'
import { View, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
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

    // If it is an edit, update store to the correct mix. 
    componentDidMount() {
        const drink = this.props.navigation.getParam('drink');
        if (drink) {
            this.props.importMix(drink);
        }
    };

    // Update ingredient amount due to picker and text input
    updateIngredient = (newA, newA2, newU, newT, index, newId) => {
        let newIngredient = { amount: newA, amount2: newA2, unit: newU, ingredient: newT, id: newId };
        let allIngredients = this.props.ingredients;
        allIngredients[index] = newIngredient;
        this.props.updateIngredient(allIngredients);
    };
/*
    // Update tags due to text input
    updateTags = (tag, index, id) => {
        let newTags = [...this.state.tags];
        newTags[index] = { title: tag, id: id };
        this.setState({ tags: newTags });
    }
*/
    // Add item to either the ingredients list or tags list
    addItem = (list) => {
        /*
        if (list === 'INGREDIENT') {
            let newId = (this.state.ingredients.length+1).toString();
            let newIngredients = this.state.ingredients.concat({ id: newId, amount: '0', amount2: ' ', unit: ' ', ingredient: '' });
            this.setState({ ingredients: newIngredients });
        } else if (list === 'TAG') {
            let newId = (this.state.tags.length+1).toString();
            let newTags = this.state.tags.concat({ id: newId, title: '' });
            this.setState({ tags: newTags });
        } */
        console.log('temporary');
    };

    handleTextInput = (value, type) => {
        if (type === 'title') {
            this.props.updateName(value);
        } else if (type === 'instructions') {
            this.props.updateInstructions(value);
        }
    };

    render() {
        return (
            <KeyboardShift>
            {() => (

            <ScrollView>
                <View style={styles.container}>
                    <EditImage img={this.props.img} updateImage={image => this.props.updateImage(image)} />
                    <View style={{ marginBottom: 20}} />
                    <EditDrinkName title={this.props.title} handleTextInput={this.handleTextInput} />
                    <View style={{ marginBottom: 40}} />
                    <EditList 
                        list={this.props.ingredients}
                        updateList={this.updateIngredient} 
                        addItem={this.addItem}
                        type="INGREDIENT"
                    />
                    <View style={{ marginBottom: 40}} />
                    <EditInstructions instructions={this.props.instructions} handleTextInput={this.handleTextInput} />
                    <View style={{ marginBottom: 40}} />
                    {/*
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
                    <DeleteMix navigation={this.props.navigation} /> */}
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
        "Cancel",
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
        "Submit",
        "Are you done making edits to your Mix?",
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
    store.dispatch(updateMix(/*UPDATED CREATE REDUCER IN HERE*/));
}

const mapStateToProps = (state) => {
    return { 
        id: state.createReducer.id,
        title: state.createReducer.title,
        instructions: state.createReducer.instructions,
        ingredients: state.createReducer.ingredients,
        img: state.createReducer.img,
        tags: state.createReducer.tags,
        created: state.createReducer.created,
        favorited: state.createReducer.favorited
    };
};

export default connect(mapStateToProps, actions)(CreateScreen);