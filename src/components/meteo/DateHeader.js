import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { jour, mois } from '../../utils/dateUtils';
import MyText from '../MyText';


const DateHeader = ({weather}) => {

    const date = new Date(weather.dt * 1000);

    return (
        <View style={styles.date}>
            <MyText  ftw='bold' style={styles.dateDay}>{
                jour[date.getDay()]
                + ', '
            }</MyText>
            <MyText  ftw style={styles.dateOther}>{
                date.getDate()
                + ' ' +
                mois[date.getMonth()]
                + ' ' +
                date.getFullYear()
            }</MyText>
        </View>
    )
};

const styles = StyleSheet.create({
    date: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    dateDay: {
        color:'#FFFAFA',
        fontSize: 24,
    },
    dateOther: {
        color: '#FFFAFA',
        fontSize: 24,
    }
})


export default DateHeader;