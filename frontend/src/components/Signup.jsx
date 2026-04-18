import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const sparkle = keyframes`
  0%,100% { opacity: 0.2; transform: scale(1) }
  50% { opacity: 1; transform: scale(1.5) }
`;

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-30px) }
  100% { transform: translateY(0px) }
`;

const inputGlowSx = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.8)",
    "& fieldset": {
      borderColor: "rgba(19,57,37,0.18)",
    },
    "&:hover fieldset": {
      borderColor: "#C38822",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#C38822",
      boxShadow: "0 0 12px rgba(195,136,34,0.28)",
    },
  },
};

const Signup = () => {
  const navigate = useNavigate();
  const { signupUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const validateForm = () => {
    const errors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const username = formData.username.trim();
    const email = formData.email.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (!username) {
      errors.username = "Username is required";
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFieldErrors(errors);

    return !Object.values(errors).some((value) => value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const res = await signupUser(
      formData.username.trim(),
      formData.email.trim(),
      formData.password,
    );

    if (res.success) {
      navigate("/login");
    } else {
      setError(
        res.message ||
          "Signup failed. Please check your details and try again.",
      );
    }
  };

  return (
    <Box
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(-45deg, #98f8c5, #62b487, #55a582, #54d199)",
        backgroundSize: "400% 400%",
        animation: `${gradientAnimation} 6s ease infinite`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: cursor.y - 150,
          left: cursor.x - 150,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(195,136,34,0.25)",
          filter: "blur(120px)",
          pointerEvents: "none",
          transition: "0.1s",
          zIndex: 0,
        }}
      />

      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: 6,
            height: 6,
            bgcolor: "#C38822",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `${sparkle} ${2 + Math.random() * 3}s infinite`,
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#C38822",
          borderRadius: "50%",
          filter: "blur(140px)",
          opacity: 0.2,
          top: "10%",
          left: "10%",
          animation: `${float} 6s infinite`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 250,
          height: 250,
          bgcolor: "#ffffff",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.1,
          bottom: "10%",
          right: "10%",
          animation: `${float} 8s infinite`,
        }}
      />

      <Paper
        elevation={12}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 420,
          borderRadius: "20px",
          backdropFilter: "blur(18px)",
          background: "rgba(255,255,255,0.9)",
          zIndex: 2,
        }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#133925",
          }}
        >
          Create Account
        </Typography>

        <Typography textAlign="center" sx={{ mb: 3, color: "#666" }}>
          Join the Bridora experience
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSignup} noValidate>
          <TextField
            fullWidth
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            error={!!fieldErrors.username}
            helperText={fieldErrors.username}
            sx={inputGlowSx}
          />

          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!fieldErrors.email}
            helperText={fieldErrors.email}
            sx={inputGlowSx}
          />

          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!fieldErrors.password}
            helperText={fieldErrors.password}
            sx={inputGlowSx}
          />

          <TextField
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!fieldErrors.confirmPassword}
            helperText={fieldErrors.confirmPassword}
            sx={inputGlowSx}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              py: 1.3,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #C38822, #e0a93a)",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(195,136,34,0.4)",
              },
            }}
          >
            Signup
          </Button>
        </form>

        <Typography textAlign="center" sx={{ mt: 3 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#C38822" }}>
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
