import React, {useState} from 'react';
import logo from './logo.svg';
import Avengers from './components/Avengers'
import AvengerForm from './components/AvengerForm'
import './App.css';

function App() {
  const [avengers, setAvengers] = useState([
    {
      alias: 'Ironman',
      identity: 'Tony Stark'
    }
  ])
  console.log(avengers)

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://seeklogo.com/images/S/s-h-i-e-l-d-logo-F89847BD30-seeklogo.com.png" className="App-logo" alt="logo" />
        <h1>Avengers Initiative</h1>
        <p>CONFIDENTIAL: DIRECTOR FURY EYES ONLY</p>
      </header>
      <AvengerForm />
      <Avengers avengers={avengers} />
    </div>
  );
}

export default App;
