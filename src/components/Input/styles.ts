import { propNames } from "@chakra-ui/react";
import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.TextInput`
          width: 100%;
          height: 56px; 
          border: 1px solid #F89D;
          padding: 0 30px;
          margin: 0 20px;
          background-color: ${(props) => props.theme.COLORS.BACKGROUND};
          font-family: ${({theme}) => theme.FONTS.MEDIUM};
`;