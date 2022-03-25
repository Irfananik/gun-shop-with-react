import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [guns,setGuns] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => setGuns(data))
  },[])

  return (
    <div className="App">
      <Header/>
      {
        guns.map(gun => <h3>{gun.name}</h3>)
      }
    </div>
  );
}

export default App;
