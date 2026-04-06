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
import api from "../api";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/contact/", formData);

      setOpen(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setErrorOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
    setErrorOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f7f7f7", width: "100%" }}>
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
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />

              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Message"
                name="message"
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  bgcolor: "#133925",
                  "&:hover": { bgcolor: "#0e261b" },
                  textTransform: "none",
                  py: 1.5,
                }}
                fullWidth
              >
                {loading ? "Sending..." : "SEND Message"}
              </Button>
            </Stack>
          </form>
        </Paper>

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
            width: { xs: "90%", sm: "70%", md: "500px" },
            mx: "auto",
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          ✅ Your Message Sent Successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{
            width: { xs: "90%", sm: "70%", md: "500px" },
            mx: "auto",
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          ❌ Failed to send message. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;