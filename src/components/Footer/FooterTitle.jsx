import { Typography } from '@mui/material';
import React from 'react';

const FooterTitle = ({ text, color }) => {
  return (
    <Typography
      variant='h6'
      component='h6'
      sx={{
        fontWeight: '700',
        textTransform: 'capitalize',
        pb: 1,
        color: color || '#F16E0D', // Set color to white (#fff) or the provided color
      }}
    >
      {text}
    </Typography>
  );
};

export default FooterTitle;
