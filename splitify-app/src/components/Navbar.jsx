import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simula logout (implemente autenticação posteriormente)
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Splitify
        </Typography>
        <Box>
          <Button
            color="inherit"
            onClick={() => navigate("/dashboard")}
            sx={{ marginRight: 2 }}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/groups/1")}
            sx={{ marginRight: 2 }}
          >
            Grupos
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
