import React from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import DrinkListView from '../components/DrinkListView';

class ListScreen extends React.Component {
    render() {
        return (
            <View>
                <Button title="Detail" style={styles.button} onPress={() => this.props.navigation.navigate('Detail')} />
                <FlatList
                    data={this.props.drinks}
                    keyExtractor={drink => drink.img}
                    renderItem={(drink) => <DrinkListView drink={drink} />}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        width: 50
    }
});

// Redux Store Passes State To Component
const mapStateToProps = (state) => {
  return {
    drinks: state.drinkReducer.drinks,
  };
};

export default connect(mapStateToProps)(ListScreen);