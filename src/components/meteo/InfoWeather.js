import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { imageWeather } from '../../utils/imageUtils';
import MyText from '../MyText';

const InfoWeather = ({temp, icon, city}) => {
    return(
        <View style={styles.container}>
            <MyText ftw style={styles.temp}>{temp}</MyText>
            <Image style={styles.img} source={imageWeather[icon]}/>
            <MyText ftw='bold' style={styles.city}>{city}</MyText>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    temp: {
        fontSize: 50,
        marginVertical: 20
    },
    city: {
        fontSize: 50,
        marginVertical: 20
    },
    img: {
        height: 150,
        resizeMode: 'contain'
    }
});

export default InfoWeather;