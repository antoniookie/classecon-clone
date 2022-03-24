import styled from "styled-components/native";
import THEME from "../../global/theme";

export const Container = styled.View`
          flex: 1;
          align-items: center;

`;

export const Header = styled.Image`
          width: 80%; 
          height: 70px;
          justify-content: center;
          margin-top: 30px;
`;

export const Title = styled.Text`
          font-size: 30;
          color: #F89D;
          font-family: ${({theme}) => theme.FONTS.BOLD};

`;

