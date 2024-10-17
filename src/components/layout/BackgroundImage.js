import styled from "styled-components";

const BackgroundImage = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  object-fit: ${(props) => props.objectFit || "cover"};
  ${(props) => props.customStyles};
`;

export default BackgroundImage;
