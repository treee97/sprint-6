import styled from "styled-components";
//declarar un type?
// we could export the type 
//Exporting them gives us the option to use them in different places throughout our application if we need to extend or compose them.
//https://www.totaltypescript.com/tutorials/react-with-typescript/components/ensure-props-are-present-and-defined/solutionç

const Container = styled.div`
  border: 2px solid white;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.4);
  padding: 10px;
  margin: 10px;
`;


type sentenceProp = {
  sentence: string;
}
const Escena = ({sentence} : sentenceProp) => {
  //destructuring
  

  return (
    <>
        <Container>{sentence}</Container>
    </>
  )
}

export default Escena
