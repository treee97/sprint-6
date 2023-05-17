import styled from "styled-components";

const ButtonElement = styled.div`
    padding: 2rem;
    font-size: 2rem;
    border: 3px solid white;
    width: 50%;
    cursor: pointer;
    user-select: none;


    &:hover{
        background: rgba(255,255,255, 0.6);
    }
`;
//los styled siempre CamelCase

export type TextProp = {
    text: string;
    onClick?: () => void;
}

const Button = ({text, onClick} : TextProp) => {
  return (
    <ButtonElement onClick={onClick}>{text}</ButtonElement>
  )
}

export default Button