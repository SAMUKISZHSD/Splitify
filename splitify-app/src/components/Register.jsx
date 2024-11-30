import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simula criação de conta
    if (name && email && password) {
      localStorage.setItem("user", email);
      navigate("/dashboard");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Registrar
      </Typography>
      <TextField
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <TextField
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Registrar
      </Button>
    </Box>
  );
};

export default Register;
