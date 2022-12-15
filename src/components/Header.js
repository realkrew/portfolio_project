import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../images/logo-w.svg';

// AppBar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Button} from "@mui/material";

const menus = [
    {title: 'Profile', link: '/profile'},
    {title: 'Projects', link: '/projects'}
];

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="header">
            <AppBar position="static" elevation={0}>
                <Toolbar className="toolbar">
                    <Link to="/" className="logo">
                        <Logo width="120" height="25" />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }} className="gnb">
                        {menus.map((menus) => (
                            <Button
                                key={menus.title}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={menus.link}
                                className="menu"
                            >
                                {menus.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
