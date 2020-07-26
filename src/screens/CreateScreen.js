import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { updateMixFB } from '../api/FirebaseActions';
import { NavigationEvents } from 'react-navigation';
import dateFormat from 'dateformat';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import EditImage from '../components/EditImage';
import EditInstructions from '../components/EditInstructions';
import EditList from '../components/EditList';
import EditFavorite from '../components/EditFavorite';
import EditDrinkName from '../components/EditDrinkName';
import DeleteMix from '../components/DeleteMix';

class CreateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      cardStyle: { backgroundColor: '#FFFFFF' },
      headerStyle: {
        backgroundColor: '#64CAF6',
      },
      safeAreaInsets: { top: 44 },
      headerTintColor: '#FCFEFF',
      headerLeft: () => (
        <Button
          title="Cancel"
          onPress={navigation.getParam('cancel')}
          color="#FCFEFF"
        />
      ),
      headerRight: () => (
        <Button
          title="Done"
          onPress={navigation.getParam('submit')}
          color="#FCFEFF"
        />
      ),
    };
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
      favorited: false,
      created: '',
    };
  }

  // Drink is an edit
  componentDidMount() {
    const drink = this.props.navigation.getParam('drink');
    if (drink) {
      this.setState({
        id: drink.id,
        title: drink.title,
        instructions: drink.instructions,
        ingredients: drink.ingredients,
        img: drink.img,
        tags: drink.tags,
        favorited: drink.favorited,
        created: drink.created,
      });
    }
    this.props.navigation.setParams({
      cancel: this.cancel,
      submit: this.submit,
    });
  }
  // Drink is a creation
  focusHandler = () => {
    if (!this.state.id) {
      let newId = 0;
      if (this.props.drinks.length > 0) {
        let drinks = this.props.drinks;
        newId = parseInt(drinks[drinks.length - 1].id) + 1;
      }
      newId = '' + newId;
      this.setState({ id: newId });
    }
    this.props.navigation.setParams({
      cancel: this.cancel,
      submit: this.submit,
    });
  };
  cancel = () => {
    Alert.alert(
      'Cancel',
      'Changes to your Mix will not be saved. Do you want to proceed?',
      [
        {
          text: 'Discard changes',
          onPress: () => {
            this.cancelHandler();
          },
        },
        {
          text: 'Continue editing',
          onPress: () => console.log('Cancel Pressed'),
        },
      ]
    );
  };
  cancelHandler = () => {
    if (this.state.created == '') {
      this.setState({
        id: null,
        title: '',
        instructions: '',
        ingredients: [],
        img: null,
        tags: [],
        favorited: false,
      });
      this.props.navigation.navigate('List');
    } else {
      this.props.navigation.goBack();
    }
  };
  submit = () => {
    if (this.state.title == '') {
      Alert.alert('Hang on!', 'You must name your Mix before submitting', []);
    } else {
      Alert.alert(
        'Submit my Mix',
        'Are you sure you are done making edits to your Mix?',
        [
          {
            text: 'Submit my Mix',
            onPress: () => {
              this.submitHandler();
            },
          },
          {
            text: 'Continue editing',
            onPress: () => console.log('Cancel Pressed'),
          },
        ]
      );
    }
  };
  submitHandler = async () => {
    let newIngredients = deleteEmptyIngredients(this.state.ingredients);
    this.setState({ ingredients: newIngredients });
    let newTags = deleteEmptyTags(this.state.tags);
    this.setState({ tags: newTags });

    if (this.state.created == '') {
      // New drink.
      let now = new Date();
      let newDate = dateFormat(now, 'mmmm dS, yyyy');
      let stateWithDate = { ...this.state };
      stateWithDate.created = newDate;
      await this.props.createMix(stateWithDate);
      if (this.props.user.loggedIn) {
        await updateMixFB(stateWithDate, this.props.user.user.uid);
      }
      await this.setState({
        id: null,
        title: '',
        instructions: '',
        ingredients: [],
        img: null,
        tags: [],
        favorited: false,
      });
    } else {
      await this.props.updateMix(this.state);

      if (this.props.user.loggedIn) {
        await updateMixFB(this.state, this.props.user.user.uid);
      }
    }
    this.props.navigation.navigate('List');
  };

  // Update ingredient amount due to picker and text input
  updateIngredient = (newA, newA2, newU, type, index, newId) => {
    let newIngredients = [...this.state.ingredients];
    newIngredients[index] = {
      amount: newA,
      amount2: newA2,
      unit: newU,
      ingredient: type,
      id: newId,
    };
    this.setState({ ingredients: newIngredients });
  };

  // Update ingredient type/text input
  updateIngredientType = (type, index, newId) => {
    let newIngredients = [...this.state.ingredients];
    newIngredients[index] = {
      amount: this.state.ingredients[index].amount,
      amount2: this.state.ingredients[index].amount2,
      unit: this.state.ingredients[index].unit,
      ingredient: type,
      id: newId,
    };
    this.setState({ ingredients: newIngredients });
  };

  // Update tags due to text input
  updateTags = (tag, index, id) => {
    let newTags = [...this.state.tags];
    newTags[index] = { title: tag, id: id };
    this.setState({ tags: newTags });
  };

  // Add item to either the ingredients list or tags list
  addItem = (list) => {
    if (list === 'Ingredient') {
      let newId = (this.state.ingredients.length + 1).toString();
      let newIngredients = this.state.ingredients.concat({
        id: newId,
        amount: '0',
        amount2: ' ',
        unit: ' ',
        ingredient: '',
      });
      this.setState({ ingredients: newIngredients });
    } else if (list === 'Tag') {
      let newId = (this.state.tags.length + 1).toString();
      let newTags = this.state.tags.concat({ id: newId, title: '' });
      this.setState({ tags: newTags });
    }
  };

  deleteItem = (list, id) => {
    if (list === 'Ingredient') {
      let newIngredients = this.state.ingredients.filter(ing => ing.id !== id);
      this.setState({ ingredients: newIngredients });
    } else if (list === 'Tag') {
      let newTags = this.state.tags.filter(tag => tag.id !== id);
      this.setState({ tags: newTags });
    }
  }

  handleTextInput = (value, type) => {
    if (type === 'title') {
      this.setState({ title: value });
    } else if (type === 'instructions') {
      this.setState({ instructions: value });
    }
  };

  updateImage = (image) => {
    this.setState({ img: image });
  };

  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        {this.state.created == '' ? (
          <NavigationEvents onDidFocus={this.focusHandler} />
        ) : null}
        <View style={styles.container}>
          <EditImage
            img={this.state.img}
            updateImage={this.updateImage}
            navigation={this.props.navigation}
          />
          <View style={{ marginBottom: 20 }} />
          <EditDrinkName
            title={this.state.title}
            handleTextInput={this.handleTextInput}
          />
          <View style={{ marginBottom: 40 }} />
          <EditList
            list={this.state.ingredients}
            updateList={this.updateIngredient}
            updateIngredientType={this.updateIngredientType}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            type="Ingredient"
          />
          <View style={{ marginBottom: 40 }} />
          <EditInstructions
            instructions={this.state.instructions}
            handleTextInput={this.handleTextInput}
          />
          <View style={{ marginBottom: 40 }} />
          <EditList
            list={this.state.tags}
            updateList={this.updateTags}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            type="Tag"
          />
          <View style={{ marginBottom: 40 }} />
          <EditFavorite
            favorited={this.state.favorited}
            handleFavorited={() =>
              this.setState({ favorited: !this.state.favorited })
            }
          />
          <View style={{ marginBottom: 40 }} />
          {this.state.created != '' ? (
            <DeleteMix navigation={this.props.navigation} mix={this.state} />
          ) : null}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 50,
  },
});

const deleteEmptyIngredients = (ingredients) => {
  let allIngredients = [...ingredients];
  for (let i = 0; i < allIngredients.length; i++) {
    let item = allIngredients[i];
    if (
      item.unit == ' ' &&
      item.amount == '0' &&
      item.amount2 == ' ' &&
      item.ingredient == ''
    ) {
      allIngredients.splice(i, 1);
      i--;
    }
  }
  return allIngredients;
};

const deleteEmptyTags = (tags) => {
  let allTags = [...tags];
  for (let i = 0; i < allTags.length; i++) {
    let item = allTags[i];
    if (item.title == '') {
      allTags.splice(i, 1);
      i--;
    }
  }
  return allTags;
};

// Redux Store Passes State To Component
const mapStateToProps = (state) => {
  return {
    drinks: state.drinkReducer,
    user: state.authReducer,
  };
};

export default connect(mapStateToProps, actions)(CreateScreen);
