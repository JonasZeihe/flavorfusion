import styled from "styled-components";
import { theme } from "../../styles/GlobalStyles";

const Button = styled.button`
  background-color: ${(props) => props.bgColor || theme.colors.accent3};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${(props) => props.fontSize || "18px"};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  padding: 12px 16px;
  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.25);
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor || theme.colors.accent4};
  }
  &:disabled {
    background-color: ${(props) =>
      props.disabledColor || theme.colors.neutral3};
    cursor: not-allowed;
  }
`;

export default Button;
