import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../images/hero_image.jpeg'

const ImageBanner = () => {
    let navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        height:  { xs: '50vh', md: '90vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for better text visibility
        }}
      ></Box>
      <Typography variant="h4" component="h1" sx={{ zIndex: 1, textAlign: 'center' }}>
      Connect with Local Businesses
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ zIndex: 1, position: 'absolute', bottom: 20 }}
        onClick={() => navigate('/contact_form')}
      >
        CONNECT
      </Button>
    </Box>
  );
};

export default ImageBanner;
