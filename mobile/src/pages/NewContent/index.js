import React, { useState, useEffect } from 'react';
import styles from './styles'
import { Container, Header, Body, Button,Title, Text, Content, Item, Label, Input, Form, View } from 'native-base';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native'
import { AsyncStorage } from 'react-native';
//import { TextInput } from 'react-native';

const Register= ()=>{

  const [title, setTitle]= useState('');
  const [description, setDescription]= useState('');
  const [value, setValue]= useState('');
  const [user_id, setId]= useState('');
  const navigation= useNavigation();


useEffect(()=>{
    AsyncStorage.getItem('user_id').then(id=>{
        setId(id);
    })
})
  const Register= async ()=>{

    const data={title,description,value}
    try{
      const response= await api.post('content', data,{
          headers:{
              authorization: user_id
          }
      });
      navigation.navigate('profile');
    }
    catch{
      alert('Erro')
    }
  }

    return (
        <Container>
        <Header androidStatusBarColor='black'>
            
          <Body>
            <Title>Novo conteudo</Title>
          </Body>
        
        </Header>

        <Content>
 
          <Form>
    
            <Item floatingLabel>
              <Label>Titulo: </Label>
              <Input onChangeText={title => setTitle(title)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Descricao: </Label>
              <Input onChangeText={description => setDescription(description)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Valor: </Label>
              <Input onChangeText={value => setValue(value)}/>
            </Item>

            <View style={styles.center}>
                <Button rounded success style={styles.button} onPress={Register}>
                    <Text>Registrar</Text>
                </Button>

            </View>


          </Form>
        </Content>

      </Container>


      );    
    
}

export default Register
