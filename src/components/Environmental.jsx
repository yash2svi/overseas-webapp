import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const OceanPlasticImpactCalculator = () => {
  const [plasticUsage, setPlasticUsage] = useState(0);
  const [oceanPlasticFootprint, setOceanPlasticFootprint] = useState(0);

  const calculateOceanPlasticFootprint = () => {
    const plasticEmissions = plasticUsage * 0.5; // assuming 0.5 tons of ocean plastic per unit of plastic usage
    setOceanPlasticFootprint(plasticEmissions);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: 'white', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Ocean Plastic Impact Calculator
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <TextField
            label="Plastic Usage"
            type="number"
            value={plasticUsage}
            onChange={(e) => setPlasticUsage(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={calculateOceanPlasticFootprint}>
          Calculate Ocean Plastic Footprint
        </Button>
      </Box>
      {oceanPlasticFootprint > 0 && (
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Ocean Plastic Footprint:
          </Typography>
          <Typography variant="h4" component="h2" color="primary">
            {oceanPlasticFootprint} tons of ocean plastic
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default OceanPlasticImpactCalculator;