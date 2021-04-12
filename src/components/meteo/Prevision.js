import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { jour, mois } from '../../utils/dateUtils';
import { imageWeather, openWeatherIcon } from '../../utils/imageUtils';
import MyText from '../MyText';


const Prevision = ({weather}) => {

    const transfromDate = () => {
        const date = new Date(weather.dt * 1000);

        return jour[date.getDay()].substring(0,3) 
        + ' ' + 
        date.getDate() 
        + ' ' +
        mois[date.getMonth()].substring(0,3);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageWeather[openWeatherIcon[weather.weather[0].main]]}/>
            <MyText  ftw='bold' style={styles.date}>{transfromDate()}</MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        resizeMode: 'contain',
        height: 85
    },
    date: {
        fontSize: 18,
        marginTop: 10
    }
})

export default Prevision;