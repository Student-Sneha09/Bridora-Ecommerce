import React from "react";
import { Box, Grid, TextField, Typography, Button, Paper, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f7f7f7", width: "100vw" }}>
      
      {/* Top Section: Heading & Description */}
      <Box textAlign="center" py={8}>
        <Typography variant="h3" color="#c28826ff" sx={{ fontWeight: "800", mb: 1 }}>
          Get In Touch
        </Typography>
        <Typography variant="h6" color="#555">
          Have a question or want to create something special? We'd love to hear from you
        </Typography>
      </Box>

      {/* Bottom Section: Form & Contact Info */}
      <Grid
        container
        sx={{ width: "100%", display: "flex", flexWrap: "nowrap" }} // no wrapping, full width
      >
        {/* Left Side - Form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "50vw", // force half viewport width
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack spacing={3} sx={{ width: "80%" }}>
            Name:<TextField variant="outlined" fullWidth />
            Email:<TextField  variant="outlined" fullWidth type="email" />
            Message:<TextField
              variant="outlined"
              fullWidth
              multiline
              rows={6}
            />
            <Button
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
        </Grid>

        {/* Right Side - Contact Info */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "50vw", // force half viewport width
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 5,
              width: "80%", // content width inside the column
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "5%",
            }}
          >
            <Typography variant="h5" color="#133925" gutterBottom align="center">
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
