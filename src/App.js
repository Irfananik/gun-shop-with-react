import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function App() {
  const [guns,setGuns] = useState([])
  const [cart,setCart] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log(cart)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <div className="modal-btn-container">
        <button className="modal-btn" onClick={openModal}>Open Your Cart list</button>
      </div>
      <div className = "gun-container">
        {
          guns.map(gun => <Cart key={gun.id} gunData = {gun} handleCart={handleCart}/>)
        }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Clode</button>
        <div>
        {
          cart.map(item => <h3 key = { item.id}> {item.id} {item.name}</h3>)
        }
      </div>
      </Modal>
    </div>
  );
}

export default App;
