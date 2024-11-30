import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Bem-vindo ao Dashboard!
        </Typography>
        <Typography variant="body1">
          Aqui você pode gerenciar seus grupos e despesas.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 3 }}>
          Gerenciar Grupos
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
