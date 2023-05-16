import './App.css';
import { Button, Escena } from './components';
import data from './constants/data';
import images from './constants/images';
import {useEffect, useState} from "react";
import styled from "styled-components";


const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ContainerScreen = styled.div`
  width: 100%;
  background: green;
  height: 100vh;
  display: flex; 
  align-items: center;
  justify-content: center;
`
 // &:hover {
  //   para hover meter esto dentro del ` `;
  //   }
  //https://www.youtube.com/watch?v=jRxoO-Zd0pQ

// const Background = styled.div`
//   background: ${img};
//   background-position: center;
//   background-size: cover;
// `



function App() {
  useEffect(()=>{
    console.log("data!!!",data)
  },[])
  const [welcomeScreen, setWelcomeScreen] = useState<boolean>(true);
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

    const showHome = ()=>{
     setWelcomeScreen(false)
    }

  return (
    <>
    
    {welcomeScreen === true && (
      <ContainerScreen>
        <Button onClick={showHome} text="Comenzar" />
      </ContainerScreen>
    )}

    {welcomeScreen === false && 
    (
      <>
        <ContainerButton>
          <Button onClick={handlerBack} text="Anterior" /> 
          <Button onClick={handlerNext} text="Siguiente" />
        </ContainerButton>

        {data.map((item, index) => (
            <Escena key={index} text={item.txt} img={item.img} isFocused={changeStory === index} />
          ))
        }
      </>
    )}
  
    </>
  )
}

export default App
