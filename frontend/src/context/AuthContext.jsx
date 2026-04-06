import React, { createContext, useEffect, useState } from "react";
import api from "../api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const stored = localStorage.getItem("authTokens");
    return stored ? JSON.parse(stored) : null;
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUser = async (username, password) => {
  try {
    const response = await api.post("/auth/login/", {
      username,
      password,
    });

    setAuthTokens(response.data);
    localStorage.setItem("authTokens", JSON.stringify(response.data));

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.detail ||
        error.response?.data?.username?.[0] ||
        error.response?.data?.password?.[0] ||
        "Invalid username or password",
    };
  }
};

  const signupUser = async (username, email, password) => {
  try {
    await api.post("/auth/signup/", {
      username,
      email,
      password,
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.username?.[0] ||
        error.response?.data?.email?.[0] ||
        error.response?.data?.password?.[0] ||
        "Signup failed",
    };
  }
};

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  const fetchUser = async () => {
    if (!authTokens?.access) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const response = await api.get("/auth/me/", {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error("Fetch user error:", error);
      logoutUser();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [authTokens]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authTokens,
        loginUser,
        signupUser,
        logoutUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;