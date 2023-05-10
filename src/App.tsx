import './App.css';
import Escena from './components/Escena';
import { data } from './constants';


function App() {

  return (
    <>
      {data.map((sentence, index) => (
        <Escena key={index} sentence={sentence}/>
      ))
        }
    </>
  )
}

export default App
