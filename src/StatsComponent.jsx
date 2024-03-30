import React from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const StatsCard = ({ stat }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        minHeight: "150px",
        flexGrow: 0,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" component="div" gutterBottom color="green">
        {stat.number}
      </Typography>
      <Typography variant="subtitle1">{stat.label}</Typography>
    </Card>
  );
};

const StatsComponent = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));

  const stats = [
    { number: "1000+", label: "Manufacturers" },
    { number: "500+", label: "Wholesalers" },
    { number: "300+", label: "Retailers" },
  ];

  return (
    <Box sx={{ padding: "20px 0" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: matchesSM ? "auto" : "100%", flexWrap: "flexWrap" }}
      >
        {stats.map((stat, index) => (
          <Grid item xs key={index}>
            <StatsCard stat={stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsComponent;
