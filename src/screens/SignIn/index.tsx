import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import logoClassecon from "../../assets/classeconlogo.png";
import { Container, Header, Title, MiddleImage } from "./styles";
import { Input } from "../../components/Input";
import { homeImage } from "../../assets/homeImage.png";
import LogoPequena from '../../assets/classecon-icon.svg';

export function SignIn() {
  return (
    <Container>
      <LogoPequena width={100} height={100}/>
      <Title>Bem vindo ao Classecon</Title>
      <Input placeholder="Login" />
    </Container>
  );
}
