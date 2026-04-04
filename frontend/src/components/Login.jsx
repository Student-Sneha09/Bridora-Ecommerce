import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar2 from "./Navbar2";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await loginUser(formData.username, formData.password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <Navbar2 />
      <Box sx={{ maxWidth: "450px", mx: "auto", mt: 8, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Login
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            name="username"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.username}
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
            Login
          </Button>
        </form>

        <Typography sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#C38822" }}>
            Signup
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Login;