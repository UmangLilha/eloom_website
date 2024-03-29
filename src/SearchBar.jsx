import React from "react";
import { TextField, Box, useTheme, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Make sure you've imported the SearchIcon
import InputAdornment from "@mui/material/InputAdornment";

const SearchBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ padding: "10px", display: "flex", justifyContent: "center" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Find Suppliers"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: "800px", // Max width for larger screens
          width: matches ? "50%" : "100%", // 100% width on mobile, 50% on desktop
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px", // Rounded corners for the TextField
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
