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

function App() {
 const [changeStory, setChangeStory] = useState(0);
  //onClick ={(index: number) => setChangeStory(index + 1)}
    //pasamos una prop y cuando cliquemos
  return (
    <>
  {/* <Button onClick = onClick ={() => setChangeStory(index + 1)}/> */}
  {/* <Button onClick = onClick ={() => setChangeStory(index + 1)}/> */}
    <ContainerButton>
      <Button text="Anterior" onClick ={(index: number) => setChangeStory(index + 1)}/> 
      <Button text="Siguiente" />
    </ContainerButton>
      {data.map((sentence, index) => (
          <Escena key={index} sentence={sentence}/>
        ))
      }
    </>
  )
}
//primero texto rojo por default
//clicamos siguiente. el siguiente bloque cambia a rojo
export default App
