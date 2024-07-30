import React, { useState } from 'react';
import { Typography, Grid, Paper, Select, MenuItem } from '@mui/material';

const OceanCleanupDrive = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [campaigns, setCampaigns] = useState({
    location1: {
      image: 'https://media.gettyimages.com/id/902209152/photo/mumbai-india-mumbai-police-officials-bmc-workers-school-children-of-vibgyor-school-participate.jpg?s=612x612&w=0&k=20&c=xbiUnV7uyYruCHQbj8f203yhtavEhaNFnaUPItZOpXc=',
      details: ' Versona cleanup ocean drive conducted on March 21 , 2024, in Juhu , Mumbai ',
    },
    location2: {
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/plastic_drive_1200x768.jpeg?VersionId=y0yxg3o6lSfoKEIzEbPDfa8WzEcpKcn1&size=690:388',
      details: 'The world’s largest beach cleanup drive took place in Andhra Pradesh’s Visakhapatnam on 24 March 2024. Over 76 tonnes of plastic was collected by over 22,000 people',
    },
    location3: {
      image: 'https://ncpor.res.in/upload/Newsfile/big/307365961_1588691054878889_8721241566578580753_n%20(1).JPG',
      details: ' Coastal Cleanup drive at Bogmalo Beach, Goa on 17.09.2023',
    },
  });

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    setSelectedImage(campaigns[location]?.image || '');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        {/* Paper for containing the realistic photo */}
        <Paper elevation={3}>
          {selectedImage && (
            <div className="card">
              <img src={selectedImage} alt="Ocean Cleanup Drive" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
            </div>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Program details and location dropdown */}
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Ocean Cleanup Drive Program
          </Typography>
          {/* Location dropdown */}
          <Select
            value={selectedLocation}
            onChange={handleLocationChange}
            fullWidth
            displayEmpty
            inputProps={{ 'aria-label': 'Select Location' }}
          >
            <MenuItem value="" disabled>
              Select Location
            </MenuItem>
            <MenuItem value="location1">Mumbai</MenuItem>
            <MenuItem value="location2">Vishakapatnam</MenuItem>
            <MenuItem value="location3">Goa</MenuItem>
            {/* Add more locations as needed */}
          </Select>
          {/* Display selected location */}
          {selectedLocation && (
            <>
              <Typography variant="body1" paragraph>
                You selected: {selectedLocation}
              </Typography>
              <Typography variant="body1" paragraph>
                {campaigns[selectedLocation]?.details}
              </Typography>
            </>
          )}
          <Typography variant="body1" paragraph>
          Join us in our efforts to clean up the oceans! 
          </Typography>
          <Typography variant="body1" paragraph>
          The Ocean Cleanup Drive is a community-driven initiative to tackle plastic pollution in our oceans and promote environmental sustainability.
          </Typography>
          <Typography variant="body1" paragraph>
          Together, we all can make a positive impact on our oceans 
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OceanCleanupDrive;
