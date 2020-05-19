import React, { useState } from 'react';
import Routes from './src/routes';
import * as Font from 'expo-font'//Acesso em todo app
import {AppLoading} from 'expo';
import { Ionicons } from '@expo/vector-icons/';

const getFonts= ()=>{
  return Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font
  })
}

const App= ()=> {

  const [fontLoad, setfontLoad]= useState(false);
  if(fontLoad){
    return (
      <Routes/>
    );
  }else{
    return(
      <AppLoading  startAsync={getFonts}
      onFinish={()=> setfontLoad(true)}
      />
    )

  }

}

export default App

