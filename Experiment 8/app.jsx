import { useState } from 'react' 
import reactLogo from './assets/react.svg' 
import viteLogo from './assets/vite.svg' 
import heroImg from './assets/hero.png' 
import './App.css' 
import Usestate from './component/Usestate' 
function App() { 
  const [count, setCount] = useState(0) 
  return ( 
    <> 
     <Usestate/> 
    </> 
  ) 
} 
export default App  
 