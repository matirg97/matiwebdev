import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer title={"Nuestros productos"} />
    <ItemDetailContainer id={2}/>
    </>
  );
}

export default App;
