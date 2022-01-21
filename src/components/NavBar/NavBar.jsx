import React from 'react'
import './NavBar.css';
import DeleteIcon from '@material-ui/icons/Delete';
import imgLogo from "../assets/matiWebDevLogo.png"
import CartWidget from '../CartWidget/CartWidget';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const NavBar = () => {

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
                        <img className='imgLogo' src={imgLogo} />
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
                                <Link to={"/products/category/electronics"}>
                                <MenuItem onClick={handleClose}>Electronics</MenuItem>
                                </Link>
                                <Link to={"/products/category/jewelery"}>
                                <MenuItem onClick={handleClose}>Jewelery</MenuItem>
                                </Link>
                                <Link to={"/products/category/men's clothing"}>
                                <MenuItem onClick={handleClose}>Men's clothing</MenuItem>
                                </Link>
                                <Link to={"/products/category/women's clothing"}>
                                <MenuItem onClick={handleClose}>Women's clothing</MenuItem>
                                </Link>
                            </Menu>
                        </li>
                        <li className='itemAbout'>
                            <Typography>
                                about
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
