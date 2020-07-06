import React from 'react'
import { FlatList, Button, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import DrinkListView from '../components/DrinkListView';
import AsyncStorage from '@react-native-community/async-storage'; // DEV ONLY

class ListScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'My Mixes',
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStyle: {
              backgroundColor: '#64CAF6'
            },
            headerTintColor: '#FCFEFF'
        }
    }
    
    // DEVELOPMENT ONLY
    showStorage = () => {
        console.log('Current ASYNCSTORAGE: ');
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (error, stores) => {
              stores.map((result, i, store) => {
                console.log({ [store[i][0]]: store[i][1] });
                return true;
              });
            });
          });
    }
    // DEVELOPMENT ONLY
    showState = () => {
        console.log(this.props.drinks)
    }
    render() {
        return (
            <ScrollView>
            <StatusBar barStyle="light-content" backgroundColor="WHITE" />
                {/* DEVELOPMENT ONLY */}
                
                <Button title="CURRENT ASYNCSTORAGE" onPress={this.showStorage} />
                <Button title="CURRENT REDUX STATE" onPress={this.showState} /> 
                <FlatList
                    data={this.props.drinks}
                    keyExtractor={drink => drink.id}
                    renderItem={drink => <DrinkListView drink={drink} navigation={this.props.navigation}/>}
                    scrollEnabled={false}
                />
            </ScrollView>
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