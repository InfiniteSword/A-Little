import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#faf8f9'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 300
    },
    buttonText: {
        color: '#666',
        fontSize: 36
    }
});

export default class CardNavPage extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} height={300} showsButtons={true} showsPagination={false} nextButton={<Text style={styles.buttonText}>›</Text>} prevButton={<Text style={styles.buttonText}>‹</Text>}>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('./imgs/1.png')} />
                </View>
                <View style={styles.slide2}>
                    <Image style={styles.image} source={require('./imgs/2.png')} />
                </View>
                <View style={styles.slide3}>
                    <Image style={styles.image} source={require('./imgs/3.png')} />
                </View>
            </Swiper>
        )
    }
}

