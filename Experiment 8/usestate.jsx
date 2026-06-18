import React from 'react' 
import { useState } from 'react'; 
 
function Usestate() { 
    const [count, setCount] = useState(0); 
     const increment = () => { setCount(count + 1); };  
     const decrement = () => { setCount(count - 1);}; 
     const reset = () => { setCount(0); }; 
  return ( 
    <div> 
      <div className="container">  
        <h1>React Counter Application</h1> 
         <h2 className="counter">{count}</h2>  
         <div className="buttons">  
            <button onClick={increment}>Increment (+)</button>  
            <button onClick={decrement}>Decrement (-)</button>  
            <button onClick={reset}>Reset</button>  
            </div>  
            </div> 
<p> Name-Yatharth Raj Nandan</p> 
<p>Class-Cse-21</p> 
<p>Roll No.-2503201001360</p> 
    </div>)} 
