import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 258px;
  height: 452px;
  border-radius: 15px;
  border: 2px solid ${({ borderColor }) => borderColor || 'var(--neutral1)'};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`

const CardTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

const Card = ({ image, title, borderColor }) => (
  <CardContainer backgroundImage={image} borderColor={borderColor}>
    <CardTitle>{title}</CardTitle>
  </CardContainer>
)

export default Card
