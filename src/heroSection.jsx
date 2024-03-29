import React from "react";
import { Typography, Button, Box, useTheme } from "@mui/material";

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        p: 4, // padding
        color: "black",
        backgroundImage: "url(../images/hero_image.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: { xs: "50vh", md: "100vh" },
        pt: { xs: "20vh", md: "30vh" },
      }}
      id="hero"
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" }, // Responsive font size
          fontWeight: "bold", // Make the text bold
        }}
      >
        Connect with Local Businesses
      </Typography>
      <Typography
        variant="h5"
        component="p"
        gutterBottom
        sx={{
          fontSize: { xs: "1rem", md: "1.25rem" }, // Responsive font size
          fontWeight: "bold", // Make the text bold
        }}
      >
        Discover manufacturers, wholesalers, and retailers from all over India
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
          padding: { xs: "0.75rem 1.5rem", md: "1rem 3rem" }, // Responsive padding
          fontWeight: "bold", // Make the button text bold
          mt: 2, // Margin-top for spacing between the text and button
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
