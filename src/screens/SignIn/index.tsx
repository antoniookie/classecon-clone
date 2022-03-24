import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import logoClassecon from "../../assets/classeconlogo.png";
import { Container, Header, Title, MiddleImage } from "./styles";
import { Input } from "../../components/Input";
import { homeImage } from "../../assets/homeImage.png";

export function SignIn() {
  return (
    <Container>
      <Header source={logoClassecon} />
      <MiddleImage source={homeImage} />
      <Title>Bem vindo ao Classecon</Title>
      <Input placeholder="Login" />
    </Container>
  );
}
