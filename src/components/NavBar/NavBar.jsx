import React, { useContext, useState } from 'react'
import './NavBar.css';
import DeleteIcon from '@material-ui/icons/Delete';
import imgLogo from "../assets/matiWebDevLogo.png"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { cartContext } from '../CartProvider/CartProvider';

const NavBar = () => {



    const { removeCart, cart } = useContext(cartContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleAlertOpen = () => {
        setOpen(true);
    };

    const handleAlertClose = () => {
        setOpen(false);
    };

    const handleAlertEliminate = () => {
        setOpen(false);
        removeCart();
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
                        <li className='deleteIcon'>
                            <IconButton aria-label="delete" onClick={handleAlertOpen}>
                                <DeleteIcon />
                            </IconButton>
                            <Dialog
                                open={open}
                                onClose={handleAlertClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Eliminar carrito"}</DialogTitle>
                                <DialogContent>
                                    {cart.length > 0 ?
                                        <DialogContentText id="alert-dialog-description">
                                            ¿Desea eliminar todo el contenido de su carrito?
                                        </DialogContentText>
                                        :
                                        <DialogContentText id="alert-dialog-description">
                                            ¡Todavia no tiene elementos en su carrito!
                                        </DialogContentText>
                                    }
                                </DialogContent>
                                <DialogActions>
                                    {cart.length > 0 ?
                                        <>
                                            <Button onClick={handleAlertClose} color="secondary">
                                                Cerrar
                                            </Button>
                                            <Button onClick={handleAlertEliminate} color="primary" autoFocus>
                                                ELIMINAR
                                            </Button>
                                        </>
                                        :
                                        <Button onClick={handleAlertClose} color="secondary">
                                            Cerrar
                                        </Button>
                                    }
                                </DialogActions>
                            </Dialog>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
