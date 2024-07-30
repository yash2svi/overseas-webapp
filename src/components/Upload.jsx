import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledUploadButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00b4db, #0083b0)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #0083b0, #00b4db)',
  },
}));

const CircularImageUpload = styled('div')(({ theme }) => ({
  width: 300,
  height: 300,
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 70,
  margin: '0 auto',
}));

const UploadImagesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [plasticFound, setPlasticFound] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDetectClick = () => {
    if (selectedImage) {
      console.log('Detecting image:', selectedImage);

      // Print "plastic found" for all cases
      console.log('plastic found');
      setPlasticFound(true); // Update the state to indicate plastic was found

      // You can add additional logic here, such as displaying a message or updating the UI
    } else {
      alert('Please select an image first.');
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Upload and detect images
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Underwater images
          </Typography>
          <Paper elevation={3} style={{ padding: 40 }}>
            <CircularImageUpload>
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              ) : (
                <Typography variant="body1">No image selected</Typography>
              )}
            </CircularImageUpload>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" mt={4}>
              <label htmlFor="image-upload">
                <StyledUploadButton variant="contained" component="span">
                  Upload Image
                </StyledUploadButton>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <StyledUploadButton variant="contained" onClick={handleDetectClick}>
                Detect
              </StyledUploadButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {plasticFound && (
        <Typography variant="h6" align="center" style={{ marginTop: '1rem' }}>
          Plastic detected
        </Typography>
      )}
    </div>
  );
};

export default UploadImagesPage;