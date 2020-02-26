import React, {useState} from 'react';
import Avengers from './components/Avengers'
import AvengerForm from './components/AvengerForm'
import './App.css';

function App() {
  const [avengers, setAvengers] = useState([
    {
      id: 0,
      alias: 'Ironman',
      identity: 'Tony Stark',
      superpower: 'Genius',
      home:'Earth',
      avatar: 'https://thumbs.dreamstime.com/b/ironman-iron-man-marvel-s-superhero-model-picture-taken-streets-singapore-126620551.jpg'
    }
  ])
  // console.log(avengers)

  const addNewAvenger = avenger =>{
    const newAvenger = {
        id: Date.now(),
        alias: avenger.alias ,
        identity: avenger.identity,
        superpower: avenger.superpower,
        home: avenger.home,
        avatar: avenger.avatar
    }
    setAvengers([...avengers, newAvenger])
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src="https://seeklogo.com/images/S/s-h-i-e-l-d-logo-F89847BD30-seeklogo.com.png" className="App-logo" alt="logo" />
        <h1>Avengers Initiative</h1>
        <p>CONFIDENTIAL: DIRECTOR FURY EYES ONLY</p>
      </header>
      <AvengerForm addNewAvenger={addNewAvenger} />
      <Avengers avengers={avengers} />
    </div>
  );
}

export default App;
