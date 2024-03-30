import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { app } from "./firebase";

const firestore = getFirestore(app);

const Form = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Use setDoc with a specific document reference
      const timestamp = Date.now();
      const docRef = doc(firestore, "forms", String(timestamp)); // Specify the collection and document ID
      await setDoc(docRef, formData); // Set the document with formData

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        description: "",
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitSuccess(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <IconButton
          onClick={() => navigate("/")}
          sx={{ marginRight: 1, alignSelf: "flex-start" }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="h2"
          sx={{ textAlign: "center", width: "100%", padding: "20px " }}
        >
          CONNECT WITH US
        </Typography>
      </Box>
      <TextField
        required
        name="firstName"
        label="First Name"
        fullWidth
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextField
        required
        name="lastName"
        label="Last Name"
        fullWidth
        value={formData.lastName}
        onChange={handleChange}
      />
      <TextField
        required
        name="email"
        label="Email"
        type="email"
        fullWidth
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        required
        name="mobile"
        label="Mobile Number"
        type="tel"
        fullWidth
        value={formData.mobile}
        onChange={handleChange}
      />
      <TextField
        required
        name="description"
        label="Query Description"
        multiline
        rows={4}
        fullWidth
        value={formData.description}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
      {submitSuccess && (
        <Typography color="green">Form submitted successfully!</Typography>
      )}
    </Box>
  );
};

export default Form;
