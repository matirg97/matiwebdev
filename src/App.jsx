import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const [clickCounter, setClickCounter] = useState(0);




  return (
    <>
    <NavBar />
    <ItemListContainer title={"Item list container"} />
    </>
  );
}

export default App;
