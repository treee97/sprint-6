import './App.css';
import { Button, Escena } from './components';
import { data } from './constants';
import {useState} from "react";
import styled from "styled-components";


const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
 // &:hover {
  //   para hover meter esto dentro del ` `;
  //   }
  //https://www.youtube.com/watch?v=jRxoO-Zd0pQ

function App() {
 const [changeStory, setChangeStory] = useState<number>(0);
    //el 0 es la posicion de la primera Escena.

    const handlerBack = () => {
      if (changeStory === 0) {
        setChangeStory(data.length - 1)
      } else{ setChangeStory(changeStory - 1) }
    }
    const handlerNext = () => {
      if(changeStory === data.length - 1){
        setChangeStory(0);
      } else { setChangeStory(changeStory + 1) }
    }
  return (
    <>
    <ContainerButton>
      <Button onClick={handlerBack} text="Anterior" /> 
      <Button onClick={handlerNext} text="Siguiente" />
    </ContainerButton>

      {data.map((sentence, index) => (
          <Escena key={index} sentence={sentence} isFocused={changeStory === index} />
        ))
      }
    </>
  )
}

export default App
