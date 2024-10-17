import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/GlobalStyles";

const StyledTextBox = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor || theme.colors.neutral5};
  border-radius: 10px;
  box-shadow: 5px 5px 10px 8px rgba(255, 255, 255, 0.25);
  padding: ${(props) => props.padding || "20px"};
  opacity: ${(props) => props.opacity || 0.7};
  ${(props) => props.customStyles};
`;

const TextBox = ({ children, bgColor, padding, opacity, customStyles }) => {
  return (
    <StyledTextBox
      bgColor={bgColor}
      padding={padding}
      opacity={opacity}
      customStyles={customStyles}
    >
      {children}
    </StyledTextBox>
  );
};

export default TextBox;
