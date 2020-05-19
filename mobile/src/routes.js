import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack= createStackNavigator();

import Login from './pages/Login';
import Profile from './pages/Profile'
import Register from './pages/Register';
import NewContent from './pages/NewContent';


const Routes= ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="register" component={Register}/>
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="profile" component={Profile}/>
                <Stack.Screen name="newcontent" component={NewContent}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Routes;