import React, {useState, useEffect} from 'react';

import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateHeader from './meteo/DateHeader';
import CentralScreen from './meteo/CentralScreen';
import Prevision from './meteo/Prevision';

import DotFull from '../../assets/img/dot.png';
import DotVoid from '../../assets/img/rec.png';
import MyText from './MyText';
import { getCurrentWeather, getForecastWeather } from '../services/ApiOpenWeather';
import Geolocation from '@react-native-community/geolocation';


const HomeScreen = ({route}) => {

    const {index} = route.params;

//    Geolocation.getCurrentPosition(info => console.log(info));

    const [finalWeather, setFinalWeather] = useState(null);
    const [weather, setWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);

    useEffect(()=>{
        getCurrentWeather()
            .then(w => { 
                setWeather(w);
                if (index === -1) {
                    setFinalWeather(w)
                }
            });

        getForecastWeather()
            .then(w =>{
                const listWeather = formatJson(w);
                setForecastWeather(listWeather);
                if (index > -1){
                    setFinalWeather(listWeather[index])
                }
            })
    },[]);

    const formatJson = (w) => {
        let d = new Date();
        let i = 1;
        return w.list.filter(el => {
            let dateElement = new Date (el.dt * 1000);
            let dateNextDay = new Date(Date.UTC(d.getFullYear(),
            d.getMonth(),
            d.getDate() + i,
            12,0,0))
            el.name = w.city.name
            return dateElement.valueOf() === dateNextDay.valueOf() && i++ < 4
        });
        //for (const el of w.list){
        //    let date = new Date(el.dt * 1000)
        //    let dd = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i,12,0,0)
        //    if (date.valueOf() === dd.valueOf()){
        //        if (i > 2) {
        //            break;
        //        }
        //        i++;
        //    }
        //}
    }

    return(

        <LinearGradient
        colors={['#87CEEB', '#FFB6C1']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.5, y: 0.5 }}
      >
            
            {finalWeather &&
            <DateHeader weather={finalWeather}/>
            }
            {finalWeather &&
            <CentralScreen icon='rain_day' weather={finalWeather}/>
            }

            <View style={{flex: 1}}/>

            {forecastWeather && 
                <FlatList
                data={forecastWeather}
                renderItem={
                    ({item}) =>  <Prevision weather={item}/>
                }
                keyExtractor={(item, index) => index}
                horizontal={false}
                numColumns={3}
                />
            }

            <View style={styles.dotBottom}>
            <Image style={{marginHorizontal: 10}} source={index === 0 ? DotVoid : DotFull}/>
            <Image style={{marginHorizontal: 10}} source={index === 1 ? DotVoid : DotFull}/>
            <Image style={{marginHorizontal: 10}} source={index === 2 ? DotVoid : DotFull}/>
            </View>
            
      </LinearGradient>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87CEEB',
        flex: 1,
    },
    prevision: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    dotBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30
    }
})

export default HomeScreen;