import styled from "styled-components";

const ButtonContainer = styled.div`
    padding: 2rem;
    font-size: 2rem;
    border: 3px solid white;
    width: 50%;
    cursor: pointer;


    &:hover{
        background: rgba(255,255,255, 0.6);
    }
`;
//los styled siempre CamelCase

type textProp = {
    text: string;
}

const Button = ({text}: textProp) => {
  return (
    <ButtonContainer>{text}</ButtonContainer>
  )
}

export default Button