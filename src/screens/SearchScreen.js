import React from 'react'
import { FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import TagListView from '../components/TagListView';
import getOrderedTags from '../api/orderedTags';

class SearchScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'Search',
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStyle: {
              backgroundColor: '#64CAF6'
            },
            headerTintColor: '#FCFEFF'
        }
    }

    render() {
        let data = getOrderedTags();
        return (
            <ScrollView>
                <FlatList 
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <TagListView tag={item} index={index} navigation={this.props.navigation} />}
                    scrollEnabled={false}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      drinks: state.drinkReducer,
    };
};

export default connect(mapStateToProps)(SearchScreen);