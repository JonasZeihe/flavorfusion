import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1200px"};
  margin: 0 auto;
  padding: ${(props) => props.padding || "0 20px"};
  position: relative;
  display: ${(props) => props.display || "block"};
  ${(props) => props.customStyles};
`;

export default Container;
