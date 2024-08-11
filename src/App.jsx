import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import styles from "./App.module.css"
import Display from './Display'
import BottonContainer from './BottonContainer'

function App() {
  const [calVal, setcalVal] = useState("")
  const onButtonClick = (buttonText) => {
      
      if(buttonText === 'C'){
          setcalVal("");
      } else if(buttonText === '='){
          const result=eval(calVal);
          setcalVal(result);
      }else{
          const newValue=calVal + buttonText;
          setcalVal(newValue);
      }
  }

  return (
      <div className={styles.calculator}>
          <Display DisplayVal={calVal}></Display>
          <BottonContainer onButtonClick={onButtonClick} ></BottonContainer>
      </div>
    )
}

export default App
