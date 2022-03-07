import React, { useContext } from 'react'
import './NavBar.css';
import DeleteIcon from '@material-ui/icons/Delete';
import imgLogo from "../assets/matiWebDevLogo.png"
import CartWidget from '../CartWidget/CartWidget';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import { cartContext } from '../CartProvider/CartProvider';

const NavBar = () => {



    const { removeCart } = useContext(cartContext);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <div className='navBarDiv'>
                <div className='imgNavBar'>
                    <Link to={"/"}>
                        <img className='imgLogo' src={imgLogo} alt='Logo Mati Web Dev (Corona)' />
                    </Link>
                </div>
                <div className='divAbout' >
                    <ul className='listAbout'>
                        <li className='itemAbout'>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Categorias
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to={"/products/category/electronics"}>
                                        Electronics
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={"/products/category/jewelery"}>
                                        Jewelery
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={"/products/category/men's clothing"}>
                                        Men's clothing
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={"/products/category/women's clothing"}>
                                        Women's clothing
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </li>
                    </ul>
                </div>
                <div className='divBotones'>
                    <ul className='listaBotones'>
                        <Link to={"/cart"}>
                            <li className='itemCartWidget'>
                                <CartWidget />
                            </li>
                        </Link>
                        <li className='deleteIcon' onClick={removeCart}>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
