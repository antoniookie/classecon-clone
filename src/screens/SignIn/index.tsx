import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import logoClassecon from '../../assets/classeconlogo.png'; 
import {Container, Header, Title} from './styles'; 
import {Input} from '../../components/Input';


export function SignIn() {
          return(
                    <Container>
                              <Header source={logoClassecon} />
                              <Title>Bem vindo ao Classecon</Title>
                              <Input placeholder="Login"/>
                    </Container>
          )
}