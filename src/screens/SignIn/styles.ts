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
  color: #f89d;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const MiddleImage = styled.Image`
  width: 300px;
  height: 300px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
