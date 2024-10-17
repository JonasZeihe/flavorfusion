import styled from "styled-components";
import { Button as GlobalButton } from "./Button";
import { theme } from "../../styles/GlobalStyles";

export const Container = styled.div`
  width: 100%;
  position: relative;
  ${(props) => props.customStyles};
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${(props) => props.customStyles};
`;

export const Button = styled(GlobalButton)`
  background-color: ${(props) => props.bgColor || theme.colors.accent3};
  ${(props) => props.customStyles};
`;
