import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
     minHeight: 27,
     paddingTop: Constants.statusBarHeight + 2,
     },

     headerText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
     },

     button:{
        
      height: 50,
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center'
     },

     center:{
         marginTop: '10%',
         flexDirection: 'row',
         justifyContent: 'space-between',
     }
});