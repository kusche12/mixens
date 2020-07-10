import React from 'react'
import { FlatList, SafeAreaView, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import orderedTags from '../api/orderedTags';
import TagListView from '../components/TagListView';

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
        return (
            <SafeAreaView>
                <ScrollView>
                    <FlatList 
                        data={orderedTags}
                        keyExtractor={(tag, index) => index}
                        renderItem={({item}) => <TagListView tag={item} />}
                        scrollEnabled={false}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      drinks: state.drinkReducer,
    };
};

export default connect(mapStateToProps)(SearchScreen);