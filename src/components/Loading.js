import React from 'react';
import { SafeAreaView, Image, Text, StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Loading = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./LogoTrans.png')} style={styles.image} />
            <Text style={styles.text}>Mixens</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#64CAF6',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: WIDTH / 2,
        height: HEIGHT / 2,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white',
        top: 100
    }
})

export default Loading;