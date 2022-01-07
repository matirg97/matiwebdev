import React from 'react'
import './NavBar.css';
import DeleteIcon from '@material-ui/icons/Delete';
import imgLogo from "../assets/matiWebDevLogo.png"
import CartWidget from '../CartWidget/CartWidget';

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
                        <li className='itemCartWidget'><CartWidget /></li>
                        <li><DeleteIcon /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
