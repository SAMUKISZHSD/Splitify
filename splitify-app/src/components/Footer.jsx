import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        mt: 6,
        bgcolor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ color: "#555" }}>
        © 2024 Splitify. Todos os direitos reservados.
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={3} mt={2}>
        <Link href="/saibamais" underline="hover" sx={{ color: "#1976d2" }}>
          Saiba Mais
        </Link>
        <Link href="/login" underline="hover" sx={{ color: "#1976d2" }}>
          Login
        </Link>
        <Link href="/register" underline="hover" sx={{ color: "#1976d2" }}>
          Cadastro
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
