import styled from "styled-components";
//declarar un type?
// we could export the type 
//Exporting them gives us the option to use them in different places throughout our application if we need to extend or compose them.
//https://www.totaltypescript.com/tutorials/react-with-typescript/components/ensure-props-are-present-and-defined/solutionç

const Container = styled.div<{isFocused: boolean}>`
  border: 2px solid white;
  border-radius: 25px;
  background: ${({isFocused}) => isFocused ? 'rgba(255, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  font-weight:500;
`;


export type SentenceProp = {
  text: string;
  isFocused: boolean;
}

const Escena= ({text,  isFocused}: SentenceProp) => {
  return (
    <>
    {/* La imagen no puede ir aqui o sera renderizada en cada componente Escena */}

          <Container isFocused={isFocused}>
            {text}
          </Container>
        
    </>
  )
}


export default Escena
