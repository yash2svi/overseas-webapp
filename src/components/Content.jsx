import React from 'react';
import { Grid, Typography, IconButton, Paper, Grow, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';

// Components
import Title from './Title';
import Paragraph from './Paragraph';

const AnimatedCard = ({ children, onClick }) => {
  return (
    <Grow in timeout={500}>
      <Paper
        elevation={3}
        sx={{
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          border: '1px solid #ccc',
          backgroundColor: '#00796b', // Ocean Green color
          color: '#fff', // White text color
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </Paper>
    </Grow>
  );
};

const Content = () => {
  const navigate = useNavigate();

  const redirectToNextPage = (route) => {
    navigate(route);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        py: 5,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={5} component="section" sx={{ py: 3 }}>
        <Title text={''} textAlign={'start'} />

        <Typography variant="h6" component="h4" sx={{ fontWeight: '600', paddingTop: 1 }}>
          Features of Overseas:
        </Typography>

        <Paragraph text={' Overseas is a journey and here is what we do '} maxWidth={'75%'} mx={0} textAlign={'start'} />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnimatedCard onClick={() => redirectToNextPage('/educational')}>
          <CardContent>
            <Typography variant="h5" component="p" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
              Educational content
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnimatedCard onClick={() => redirectToNextPage('/environmental')}>
          <CardContent>
            <Typography variant="h5" component="p" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
              Environment Impact Calculator
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <AnimatedCard onClick={() => redirectToNextPage('/next-page')}>
          <CardContent>
            <ArrowCircleRightRoundedIcon fontSize="large" color="secondary" />
          </CardContent>
        </AnimatedCard>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnimatedCard onClick={() => redirectToNextPage('/Upload')}>
          <CardContent>
            <Typography variant="h5" component="p" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
              Upload and detect plastic
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnimatedCard onClick={() => redirectToNextPage('/oceancleanup')}>
          <CardContent>
            <IconButton>
              <PoolOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography variant="h5" component="p" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
              Overseas Cleanup Tracker
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnimatedCard onClick={() => redirectToNextPage('/Vr')}>
          <CardContent>
            <IconButton>
              <WifiPasswordIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography variant="h5" component="p" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
              VR Exploration
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
    </Grid>
  );
};

export default Content;

