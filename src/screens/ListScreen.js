import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import DrinkListView from '../components/DrinkListView';
import { Feather } from '@expo/vector-icons';
import getTaggedMixes from '../api/getTaggedMixes';

class ListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'My Mixes',
      headerMode: 'screen',
      cardStyle: { backgroundColor: '#FFFFFF' },
      headerStyle: {
        backgroundColor: '#64CAF6',
      },
      headerTintColor: '#FCFEFF',
      headerRight: () =>
        navigation.getParam('tag') ? null : (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather
              name="plus"
              size={28}
              color="#FCFEFF"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        ),
    };
  };

  render() {
    let tag = this.props.navigation.getParam('tag');
    let data = this.props.drinks;
    console.log(data);
    if (tag) {
      data = getTaggedMixes(tag[0]);
    }
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
        <ScrollView style={{ height: Dimensions.get('window').height }}>
          {data.map((mix) => {
            return (
              <DrinkListView
                drink={mix}
                navigation={this.props.navigation}
                key={mix.id}
              />
            );
          })}
        </ScrollView>
      </>
    );
  }
}

// Redux Store Passes State To Component
const mapStateToProps = (state) => {
  return {
    drinks: state.drinkReducer,
  };
};

export default connect(mapStateToProps)(ListScreen);
