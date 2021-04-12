import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import MyText from './src/components/MyText';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
      <MyText style={styles.headerText} ftw="bold">JUST WEATHER</MyText>
      </View>


      <NavigationContainer>

        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={
          {headerShown: false}
      }
        >

          <Stack.Screen name="Home" component={HomeScreen} initialParams={{index: -1}}/>

        </Stack.Navigator>

      </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#87CEEB'
  },
  header: {
    height: 50,
    borderStyle: 'solid',
    borderColor: '#FFFAFA',
    borderBottomWidth: 3,        
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  headerText: {
    fontSize: 25,
    color: '#FFFAFA',
},
});
