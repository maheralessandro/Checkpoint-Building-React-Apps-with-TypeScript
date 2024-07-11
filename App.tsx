import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './component/Exercice1';
import Counter from './component/Exercice2';

function App() {

  let data : string[] = ["1" , "hello" , "word"]
  return (
    <div className="App">
     <Greeting name="maher"/>
     <Counter data ={data}/>
    </div>
  );
}

export default App;
