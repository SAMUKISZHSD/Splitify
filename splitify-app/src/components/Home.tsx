import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Splitify
          </Typography>
          <Box>
            <Button
              color="inherit"
              onClick={() => navigate("/login")}
              sx={{ marginRight: 2 }}
            >
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/register")}>
              Registrar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Home Content */}
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box
          sx={{
            textAlign: "center",
            mt: 10,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Bem-vindo ao Splitify!
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Simplifique a divisão de despesas com seus amigos e grupos.
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/register")}
              sx={{ marginRight: 2 }}
            >
              Começar Agora
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate("/login")}
            >
              Já tenho uma conta
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
