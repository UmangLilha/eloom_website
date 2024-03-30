import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
      }}
    >
      <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
        <IconButton href="https://facebook.com" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://twitter.com" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://linkedin.com" color="inherit">
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
        © 2024 ELOOM
      </Typography>
    </Box>
  );
};

export default Footer;
