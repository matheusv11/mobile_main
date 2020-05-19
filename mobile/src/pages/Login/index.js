import React, { useState } from 'react';
import styles from './styles'
import { Container, Header, Body, Button,Title, Text, Content, Item, Label, Input, Form, View } from 'native-base';
import api from '../../services/api';
import { AsyncStorage } from 'react-native';

import {useNavigation} from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';

const Login= ()=>{

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const navigation= useNavigation();

    const Login= async ()=>{
        const data={email, password}
        try{
            const response= await api.post('auth', data);
            AsyncStorage.setItem('user_id', response.data.id);
        
    

            navigation.navigate('profile');//Da pra colocar os dados na rota
        }
        catch{
            alert('dados invalidos');
        }
       
    }

    return(
        <Container>
        <Header androidStatusBarColor='black'>
            
          <Body>
            <Title>Login</Title>
          </Body>
        
        </Header>

        <Content>

          <Form>
    
            <Item floatingLabel last>
              <Label>Email: </Label>
              <Input onChangeText={email=> setEmail(email)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Senha: </Label>
              <Input onChangeText={password=> setPassword(password)}/>
            </Item>

            <View style={styles.center}>

                <Button rounded primary style={styles.button} onPress={Login} >
                    <Text>Logar</Text>
                </Button>

            </View>


          </Form>
        </Content>

      </Container>
    );
}

export default Login;