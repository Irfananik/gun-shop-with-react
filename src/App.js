import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
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
      <div className = "gun-container">
        {
          guns.map(gun => <Cart key={gun.id} gunData = {gun}/>)
        }
      </div>
    </div>
  );
}

export default App;
