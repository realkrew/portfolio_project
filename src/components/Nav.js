import React from "react";

import {Link} from "react-router-dom";

import { Container, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const Nav = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container
            aria-labelledby="snb"
            className="snb"
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <List
                sx={{pt: 2}}
                component="div"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="h2" id="nested-list-subheader">
                        Pages
                    </ListSubheader>
                }
            >
                <ListItemButton className="snb-list" component={Link} to="/profile">
                    <ListItemIcon sx={{ml: 1}}>
                        <AssignmentIndOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItemButton>

                <ListItemButton className="snb-list" component={Link} to="/projects">
                    <ListItemIcon sx={{ml: 1}}>
                        <BusinessCenterOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects"/>
                </ListItemButton>

            </List>

        </Container>
    );
}

export default Nav;
