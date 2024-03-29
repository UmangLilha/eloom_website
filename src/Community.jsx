import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Community = () => {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "beige", // Adjust background color as needed
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Optional: Adds subtle shadow
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Join the Community
      </Typography>
      <Typography variant="h7" color="textSecondary" paragraph>
        Sign up to expand your business network
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/contact_form")}
      >
        Connect
      </Button>
    </Box>
  );
};

export default Community;
