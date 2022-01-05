import React from 'react'
import './NavBar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import imgLogo from "../assets/matiWebDevLogo.png"

const NavBar = () => {
    return (
        <>
            <div className='navBarDiv'>
                <div className='imgNavBar'>
                    <img className='imgLogo' src={imgLogo} />
                </div>
                <div className='divProductos' >
                    <ul className='listaProductos'>
                        <li className='itemProductos'>Productos</li>
                        <li className='itemProductos'>Nosotros</li>
                    </ul>
                </div>
                <div className='divBotones'>
                    <ul className='listaBotones'>
                        <li><ShoppingCartIcon /></li>
                        <li><DeleteIcon /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
