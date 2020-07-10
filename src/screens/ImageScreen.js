import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import firebase from 'firebase';

const WIDTH = Dimensions.get('window').width;

class ImageScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'Gallery',
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStyle: {
                backgroundColor: '#64CAF6'
            },
            headerTintColor: '#FCFEFF',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    };

    async componentDidMount() {
        const images = firebase.storage().ref().child('default');
        let mediaList = [];
        await images.listAll()
        .then(res => {
            res.items.forEach((image, index) => {
                image.getDownloadURL()
                .then((url) => {
                    mediaList.push({ photo: url, id: index });
                    this.setState({ images: mediaList });
                });
            });
        });
    };

    chooseImage = (image) => {
        this.props.navigation.getParam('updateImage')(image);
        this.props.navigation.navigate('Create');
    }


    renderImage = (image) => {
        return (
        <TouchableOpacity onPress={() => this.chooseImage(image.photo)}>
            <Image source={{ uri: image.photo.toString() }} id={image.id} style={styles.image} />
        </TouchableOpacity>
        );
    }

    render() {
        return (
            <SafeAreaView>
                <FlatList 
                    data={this.state.images}
                    keyExtractor={item => item.id }
                    renderItem={({item}) => this.renderImage(item)}
                    numColumns={3}
                    style={styles.list}
                /> 
            </SafeAreaView>
        );
    };

};

const styles = StyleSheet.create({
    image: {
        width: (WIDTH / 3),
        height: (WIDTH / 3),
        margin: 2,
        left: -2,
        top: 1
    },
});

export default ImageScreen;
