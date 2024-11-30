import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavbarHome = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      color="default" // Define uma cor fixa para a navbar (pode ser "primary", "secondary", ou personalizada)
      elevation={1} // Define uma leve sombra para destaque
      sx={{
        borderBottom: "1px solid #e0e0e0", // Linha de separação sutil
        bgcolor: "#ffffff", // Fundo branco (ou escolha outra cor)
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#333", // Mantém o texto com contraste suficiente
          }}
        >
          Splitify
        </Typography>
        <Box>
          <Button
            color="primary"
            onClick={() => navigate("/login")}
            sx={{
              color: "#1976d2",
              borderColor: "#1976d2",
              fontWeight: "bold",
              "&:hover": { bgcolor: "rgba(25, 118, 210, 0.1)" },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/register")}
            sx={{
              bgcolor: "#1976d2",
              color: "#fff",
              fontWeight: "bold",
              ml: 2,
              "&:hover": { bgcolor: "#115293" },
            }}
          >
            Cadastro
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarHome;
