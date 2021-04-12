import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import {openWeatherIcon} from '../../utils/imageUtils';
import Left from '../../../assets/img/arrow_left.png';
import Right from '../../../assets/img/arrow_right.png';
import InfoWeather from './InfoWeather';
import {useNavigation, useRoute} from '@react-navigation/native'

const CentralScreen = ({weather}) => {

    const navigation = useNavigation();
    const route = useRoute();

    const {index} = route.params;

    return (
        <View style={styles.container}>
            { 
            index < 0 ? <Image source={Left}  style={{opacity: 0.3}}/>
            :
            <Pressable onPress={() => {
            navigation.goBack()}}>
                <Image source={Left}/>
            </Pressable>
            }
                <InfoWeather temp={weather.main.temp + ' °C'} icon={openWeatherIcon[weather.weather[0].main]} city={weather.name}/>
            {
                index > 1 ? <Image source={Right} style={{opacity: 0.3}}/>
            :
            <Pressable onPress={() => {
                navigation.push('Home', {
                    index: index + 1
                })
            }}>
                <Image source={Right} />
            </Pressable>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default CentralScreen;