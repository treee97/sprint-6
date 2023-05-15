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

const ContainerScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; 
  align-items: center;
  justify-content: center;
`
 // &:hover {
  //   para hover meter esto dentro del ` `;
  //   }
  //https://www.youtube.com/watch?v=jRxoO-Zd0pQ

function App() {
  const [welcomeScreen, setWelcomeScreen] = useState<boolean>(false);
  const [changeStory, setChangeStory] = useState<number>(0);
    //el 0 es la posicion de la primera Escena.

    const handlerBack = () => {
      if (changeStory === 0) {
        setChangeStory(data.length - 1)
        //si nuestro item es el primero, volvemos al ultimo item del array.
      } else{ setChangeStory(changeStory - 1) }
        //restamos 1 a nuestro index
    }
    const handlerNext = () => {
      if(changeStory === data.length - 1){
        setChangeStory(0);
        //si estamos en el ultimo item, volvemos al primero
      } else { setChangeStory(changeStory + 1) }
        // sumamos 1 a nuestro state.
    }
  return (
    <>
    {
      !welcomeScreen && (
        <ContainerScreen>
          <Button onClick={() => setWelcomeScreen(true)} text="Comenzar" />
        </ContainerScreen>
      )
    }
    <ContainerButton>
      <Button onClick={handlerBack} text="Anterior" /> 
      <Button onClick={handlerNext} text="Siguiente" />
    </ContainerButton>

      {data.map((sentence, index) => (
          <Escena key={index} sentence={sentence} isFocused={changeStory === index} />
        ))
      }
      {/* https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components */}
    </>
  )
}

export default App
