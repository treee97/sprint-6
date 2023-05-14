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

export type textProp = {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<textProp> = ({text, onClick}) => {
  return (
    <ButtonElement onClick={onClick} aria-readonly>{text}</ButtonElement>
  )
}

export default Button