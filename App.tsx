import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { SignIn } from "../classecon-clone/src/screens/SignIn";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/theme";
import React from "react";
import { Background } from "./src/components/background";

export default function App() {
  const [fontIsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontIsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar />
        <SignIn />
      </Background>
    </ThemeProvider>
  );
}
