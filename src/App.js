import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  const [guns,setGuns] = useState([])
  const [cart,setCart] = useState([])
  console.log(cart)

  const handleCart = (gun) => {
    const newCart = [...cart, gun]
    setCart(newCart)
  }

  useEffect(() => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => setGuns(data))
  },[])

  return (
    <div className="App">
      <Header/>
      <div>
        {
          cart.map(item => <h3 key = { item.id}> {item.id} {item.name}</h3>)
        }
      </div>
      <div className = "gun-container">
        {
          guns.map(gun => <Cart key={gun.id} gunData = {gun} handleCart={handleCart}/>)
        }
      </div>
    </div>
  );
}

export default App;
