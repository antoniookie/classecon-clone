import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/theme";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { LIGHTGREEN, STRONGBLUE } = theme.COLORS;

  return (
    <LinearGradient colors={[LIGHTGREEN, STRONGBLUE]} style={styles.container}>
      {children}
    </LinearGradient>
  );
}
