import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import DrinkListView from '../components/DrinkListView';

class ListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'My Mixes',
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
        }
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.drinks}
                    keyExtractor={drink => drink.id}
                    renderItem={drink => <DrinkListView drink={drink} navigation={this.props.navigation}/>}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({});

// Redux Store Passes State To Component
const mapStateToProps = (state) => {
  return {
    drinks: state.drinkReducer.drinks,
  };
};

export default connect(mapStateToProps)(ListScreen);