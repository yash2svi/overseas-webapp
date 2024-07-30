import React from 'react';
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
// img
import headerImg from '../assets/animalplastic.jpg';
import secondImg from '../assets/turtle.jpg';

const Header = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: '#007762',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const HeaderImage = styled('img')({
        width: '100%',
        maxWidth: '1000px',
        height: 'auto',
        maxHeight: '1000px',
        borderRadius: '8px',
        border: '4px solid orange', // Add orange border
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    });

    return (
        <CustomBox component='header'>
            <BoxText component='section'>
                <Typography variant='h2' component='h1' sx={{ fontWeight: 700, color: '#fff' }}>
                    Protect Our Water Buddies
                </Typography>
                <Typography variant='p' component='p' sx={{ py: 3, lineHeight: 1.6, color: '#fff' }}>
                    You did not inherit the Earth’s water from your ancestors; you owe it to your future generations ahead.
                </Typography>
                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            backgroundColor: '#ff9b38',
                            '&:hover': {
                                backgroundColor: "#f7652e",
                            },
                        }}
                    >
                        Join mission
                    </Button>
                    <Button
                        component={Link}
                        to={'/about'}
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            color: '#fff',
                            borderColor: '#fff',
                            '&:hover': {
                                color: '#343a55',
                                borderColor: '#343a55',
                            },
                        }}
                    >
                        explore
                    </Button>
                </Box>
            </BoxText>

            <Box sx={{ flex: '2', alignSelf: 'right' }}>
                <HeaderImage src={headerImg} alt="headerImg" />
            </Box>

            <Box sx={{ flex: '2', alignSelf: 'right' }}>
                <HeaderImage src={secondImg} alt="secondImg" />
            </Box>
        </CustomBox>
    );
};

export default Header;
