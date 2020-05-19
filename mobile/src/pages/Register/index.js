import React, { useState } from 'react';
import styles from './styles'
import { Container, Header, Body, Button,Title, Text, Content, Item, Label, Input, Form, View } from 'native-base';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native'
//import { TextInput } from 'react-native';



const Register= ()=>{

  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  
  const navigation= useNavigation();

  const Register= async ()=>{
    const data={name,email,password}
    try{
      const response= await api.post('user', data);
      navigation.navigate('login');
    }
    catch{
      alert('Erro')
    }
  }

  const GoLogin= ()=>{
    navigation.navigate('login');
  }

    return (
        <Container>
        <Header androidStatusBarColor='black'>
            
          <Body>
            <Title>Registro</Title>
          </Body>
        
        </Header>

        <Content>
 
          <Form>
    
            <Item floatingLabel>
              <Label>Nome: </Label>
              <Input onChangeText={name => setName(name)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Email: </Label>
              <Input onChangeText={email => setEmail(email)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Senha: </Label>
              <Input onChangeText={password => setPassword(password)}/>
            </Item>

            <View style={styles.center}>
                <Button rounded success style={styles.button} onPress={Register}>
                    <Text>Registrar</Text>
                </Button>

                <Button rounded primary style={styles.button} onPress={GoLogin}>
                    <Text>Logar</Text>
                </Button>

            </View>


          </Form>
        </Content>

      </Container>


      );    
    
}

export default Register
