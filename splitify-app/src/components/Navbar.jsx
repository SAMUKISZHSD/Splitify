import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #e0e0e0" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#333", fontWeight: "bold" }}>
          Splitify
        </Typography>
        <Button color="primary" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>
        <Button color="primary" onClick={() => navigate("/")}>
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
