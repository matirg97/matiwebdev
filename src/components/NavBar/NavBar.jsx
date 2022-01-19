import React from 'react'
import './NavBar.css';
import DeleteIcon from '@material-ui/icons/Delete';
import imgLogo from "../assets/matiWebDevLogo.png"
import CartWidget from '../CartWidget/CartWidget';
import { Typography } from '@material-ui/core';


const NavBar = () => {
    return (
        <>
            <div className='navBarDiv'>
                <div className='imgNavBar'>
                    <img className='imgLogo' src={imgLogo} />
                </div>
                <div className='divAbout' >
                    <ul className='listAbout'>
                        <li className='itemAbout'>
                            <Typography>
                                Productos
                            </Typography>
                        </li>
                        <li className='itemAbout'>
                            <Typography>
                                Nosotros
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className='divBotones'>
                    <ul className='listaBotones'>
                        <li className='itemCartWidget'><CartWidget /></li>
                        <li className='deleteIcon'><DeleteIcon /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
