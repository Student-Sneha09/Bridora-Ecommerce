import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar2 from "./Navbar2";

const Signup = () => {
  const navigate = useNavigate();
  const { signupUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signupUser(
      formData.username,
      formData.email,
      formData.password
    );

    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <Navbar2 />
      <Box sx={{ maxWidth: "450px", mx: "auto", mt: 8, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Signup
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleSignup}>
          <TextField
            label="Username"
            name="username"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.username}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#C38822",
              "&:hover": { backgroundColor: "#a96f1c" },
            }}
          >
            Signup
          </Button>
        </form>

        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#C38822" }}>
            Login
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Signup;