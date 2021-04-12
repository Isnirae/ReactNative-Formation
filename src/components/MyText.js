import React from 'react';
import {Text} from 'react-native';
import {useFonts} from 'expo-font';

const MyText = (props) => {

    const [fontsLoaded] = useFonts({
        'Gorditas-Bold': require('../../assets/fonts/Gorditas-Bold.ttf') ,
        'Gorditas-Regular': require('../../assets/fonts/Gorditas-Regular.ttf')
    });


    const checkWeight = () => {
        if (props.ftw) {
            switch (props.ftw) {
                case 'bold':
                    return 'Gorditas-Bold'
                default:
                    return 'Gorditas-Regular'
            } 
        }
    };


    if (!fontsLoaded){
        return <Text />
    }

    return (
        <Text style={[props.style, {color: '#fffafa', fontFamily: checkWeight()}]}>{props.children}</Text>
    )
};

export default MyText;