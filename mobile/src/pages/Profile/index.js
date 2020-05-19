import React, { useState, useEffect } from 'react';
import styles from './styles'
import { Header, Body, Button,Title, Text, Right, Content, Item, Label, Input, Form, View, Container } from 'native-base';
import api from '../../services/api';
import { AsyncStorage, FlatList } from 'react-native';

import {useNavigation} from '@react-navigation/native';


const Profile= ()=>{

    const [contents, setContents]= useState([]);
    const [user_id, setId]= useState('');
    
    const [page, setPage]=useState(0);
    const [loading, setLoading]= useState(false);
    const [total, setTotal]= useState(0);

    const navigation= useNavigation();

  const Newcontent= ()=>{
    navigation.navigate('newcontent');
  }
  async function loadContents(id) {
    if (loading) {
      return;
    }

    if (total > 0 && contents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get(`profile?page=${page}`, {
      headers: {
        authorization: id
      }
    });

    setContents([...contents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  const del= async (id)=>{
 
      try{
          await api.delete(`content/${id}`,{
              headers:{
                  Authorization: user_id
              }
          });
          
          setContents(contents.filter(content => content.id !== id));
        }
      catch(error){
          alert('erro ao deletar');
      }
    }

  useEffect(() => {
      
    AsyncStorage.getItem('user_id').then(user_id=>{
      setId(user_id)
      loadContents(user_id);
  });
    
  }, []);
    
    return(
        <View style={styles.container}>
            <Header>                
                <Body>
                    <Title>Perfil </Title>
                </Body>
                <Right>
                <Button rounded success style={styles.button} onPress={Newcontent} >
                    <Text>Conteudo</Text>
                </Button>
                </Right>
            </Header>
        <View style={styles.container2}>
        
        <Text style={styles.title}>Veja seus posts!</Text>
        <Text style={styles.description}>Voce pode exclui-los também</Text>
        
      <FlatList
        data={contents}
        style={styles.incidentList}
        keyExtractor={content => String(content.id)}
        // showsVerticalScrollIndicator={false}
        onEndReached={loadContents}
        onEndReachedThreshold={0.2}
        renderItem={({item:  content }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Titulo:</Text>
            <Text style={styles.incidentValue}>{content.title}</Text>

            <Text style={styles.incidentProperty}>Descrição:</Text>
            <Text style={styles.incidentValue}>{content.description}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}> {content.value} </Text>
            <Button danger rounded style={styles.buttonDel} onPress={()=> del(content.id)}>
              <Text>Deletar</Text>
            </Button>
          </View>
          
        )}
      />
            </View>
        </View>
    )

}

export default Profile;