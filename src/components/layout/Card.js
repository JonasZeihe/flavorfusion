import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 258px;
  height: 452px;
  border-radius: 15px;
  border: 2px solid
    ${(props) => props.borderColor || "var(--neutral-colorsneutral-1)"};
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Card = ({ image, title }) => {
  return (
    <CardContainer backgroundImage={image}>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default Card;
