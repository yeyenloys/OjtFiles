import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage("Please enter both username and password");
      return;
    }
    if (username === "mariene" && password === "password") {
      console.log("Login successful");
      localStorage.setItem("token", "sample-token");
      setErrorMessage("");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography variant="h4">Login</Typography>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 300 }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{
            style: {
              color: "white",
              border: "2px",
              borderRadius: "10px",
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{
            style: {
              color: "white",
              border: "2px",
              borderRadius: "10px",
            },
          }}
        />
        <Button
          style={{ backgroundColor: "gray" }}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth>
          Login
        </Button>
      </form>
      <Button
        style={{
          backgroundColor: "transparent",
          marginTop: "10px",
          color: "white",
        }}
        onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};
