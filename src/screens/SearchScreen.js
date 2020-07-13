import React from 'react'
import { ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import TagListView from '../components/TagListView';
import getOrderedTags from '../api/orderedTags';
import SearchFilter from '../components/SearchFilter';
import DrinkListView from '../components/DrinkListView';
import { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['title', 'tags.title'];

class SearchScreen extends React.Component {
    static navigationOptions = () => {
        return {
            headerMode: 'screen',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStyle: {
              backgroundColor: '#64CAF6'
            },
            headerTintColor: '#FCFEFF',
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    };

    renderTagCategories = (data) => {
        return (
            <ScrollView style={{ height: Dimensions.get('window').height }}>
                {data.map((tag, index) => {
                    return (
                        <TagListView tag={tag} key={index} index={index} navigation={this.props.navigation} />
                    );
                })}
            </ScrollView>
        );
    };

    renderSearchQueries = (filteredMixes) => {
        return (
            <ScrollView style={{ height: Dimensions.get('window').height }}>
                {filteredMixes.map(mix => {
                    return (
                        <DrinkListView drink={mix} navigation={this.props.navigation} key={mix.id} />
                    );
                })}
            </ScrollView>
        );
    };

    render() {
        // Navigate the user to the correct tag list
        if (this.props.navigation.getParam('tag')) {
            let tag = this.props.navigation.getParam('tag');
            this.props.navigation.navigate('List', { tag });
        }

        let data = getOrderedTags();
        const filteredMixes = this.props.drinks.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
        return (
            <SafeAreaView>
                <SearchFilter searchTerm={this.state.searchTerm} handleInput={searchTerm => this.setState({searchTerm})} />
                { this.state.searchTerm
                ? this.renderSearchQueries(filteredMixes)
                : this.renderTagCategories(data)
                }
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