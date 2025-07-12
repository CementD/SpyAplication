import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'
import React from 'react';
import HelloWorld from './components/HelloWorld';
import Architecture from './components/Architecture';
import Resume from './components/Resume';
import Test from './components/test'
import Calculator from './components/Calculator';


function App() {
  return (
    <div className="App">
      {/*<Architecture/>*/}
      <h1>Hello, World, Task2</h1>
      {/*<Welcome name="Cement"/>*/}
      {/*<Test/> */}
      <Calculator/>
    </div>
  );
}

export default App;
