import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can later add form submission logic here
    setOpen(true); // show success message
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f7f7f7", width: "100%" }}>
      {/* Heading Section */}
      <Box textAlign="center" py={8}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, color: "#c28826ff", mb: 1 }}
        >
          Get In Touch
        </Typography>
        <Typography variant="h6" color="#555">
          Have a question or want to create something special? We'd love to hear from you
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          px: { xs: 3, sm: 4, md: 0 },
          pb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Form Section */}
        <Paper
          elevation={4}
          sx={{
            p: { xs: 4, md: 5 },
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h5"
            color="#133925"
            gutterBottom
            align="center"
            sx={{ mb: 3 }}
          >
            Contact-Us
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField label="Name" variant="outlined" fullWidth required />
              <TextField label="Email" variant="outlined" fullWidth type="email" required />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#133925",
                  "&:hover": { bgcolor: "#0e261b" },
                  textTransform: "none",
                  py: 1.5,
                }}
                fullWidth
              >
                SEND Message
              </Button>
            </Stack>
          </form>
        </Paper>

        {/* Contact Information */}
        <Paper
          elevation={6}
          sx={{
            p: { xs: 4, md: 5 },
            width: "100%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            color="#133925"
            gutterBottom
            align="center"
          >
            Contact Information
          </Typography>
          <Stack spacing={3} mt={3} sx={{ fontSize: "18px" }}>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 2, color: "#c28826ff" }} />
              <Typography>info@bindora.com</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 2, color: "#c28826ff" }} />
              <Typography>+91 123 456 7890</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ mr: 2, color: "#c28826ff" }} />
              <Typography>123 Bindora Street, City, India</Typography>
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* ✅ Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
      width: { xs: "90%", sm: "70%", md: "500px" }, // responsive widths
      mx: "auto", // center horizontally
      fontSize: { xs: "14px", sm: "16px" }, // smaller font on mobile
    }}
        >
          ✅ Your Message Sent Successfully — Continue Shopping!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
