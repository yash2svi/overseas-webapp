import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, styled } from '@mui/material';
import oceanVideo from '../assets/ocean.mp4';
import vrImage1 from '../assets/vr.jpg';
import vrImage2 from '../assets/vr2.jpg';
import plasticImage from '../assets/plastic.jpg';

const StyledVideo = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: ' #07635C',
  color: 'white',
  padding: theme.spacing(2, 4),
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '20px',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#15978D',
  },
}));

const VRExcellentPage = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'white', textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom color="primary">
       Explore VR with overseas
      </Typography>
      <Typography variant="h5" component="p" gutterBottom color="textPrimary">
        Experience the impact of ocean plastic through our immersive VR application.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledVideo component="video" src={oceanVideo} alt="Ocean Video" controls autoPlay loop />
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                VR Experience
              </Typography>
              <Typography variant="body1" color="textPrimary">
                Put on your VR headset and explore the underwater world affected by plastic pollution.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledImage src={plasticImage} alt="Ocean Plastic" />
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Ocean Plastic
              </Typography>
              <Typography variant="body1" color="textPrimary">
                Learn about the devastating impact of plastic waste on marine life and ecosystems.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <StyledButton variant="contained">Download VR App</StyledButton>
      </Box>
      <Grid container spacing={4} justifyContent="center" mt={4}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledImage src={vrImage1} alt="VR Image 1" />
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                VR Environment
              </Typography>
              <Typography variant="body1" color="textPrimary">
                Immerse yourself in a realistic underwater environment and witness the effects of plastic pollution firsthand.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledImage src={vrImage2} alt="VR Image 2" />
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Interactive Experience
              </Typography>
              <Typography variant="body1" color="textPrimary">
                Interact with marine life and explore different scenarios to understand the impact of plastic waste.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VRExcellentPage;