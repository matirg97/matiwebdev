import React from 'react';
import "./Footer.css"
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import imgLogo from "../assets/matiWebDevLogo.png";

const Footer = () => {


    return (
        <div className='footer'>
            <Typography className='madeBy'>
                Made by Matías Godoy.
            </Typography>
            <a href="https://www.linkedin.com/in/matiasgodoy-97/" target="_blank" >
                <LinkedInIcon className='linkedInIcon' />
            </a>
            <a href="https://github.com/matirg97" target="_blank" >
                <GitHubIcon className='gitHubIcon' />
            </a>
        </div>
    );
};

export default Footer;