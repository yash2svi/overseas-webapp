import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import DrawerItem from './DrawerItem';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const itemList = [
    {
        text: "Home",
        to: "/" 
    },
    {
        text: "About",
        to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    },
    {
        text: "Programs",
        to: "/program"
    }
];

const Navbar = () => {
    return (
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{ 
                backgroundColor: '#E8580B', 
            }}
            elevation={0}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ 
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        color: '#fff',
                    }}
                >
                    Overseas
                </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton 
                                    component={Link} 
                                    to={item.to}
                                    sx={{
                                        color: '#fff',
                                        "&:hover": {
                                            backgroundColor: 'transparent',
                                            color: '#FF8B07',
                                        },
                                        fontSize: '1.9rem', // Increase item size
                                    }}
                                >
                                    <ListItemText 
                                        primary={text} 
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    );
}

export default Navbar;


