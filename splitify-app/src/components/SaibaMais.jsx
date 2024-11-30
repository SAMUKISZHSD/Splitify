import React from "react";
import { Box, Typography, Paper, Grid, Stack } from "@mui/material";
import { Info, Group, Payment } from "@mui/icons-material"; // Importando ícones do Material UI
import NavbarGlobal from "./NavbarHome";

const benefits = [
  {
    title: "Simplifique",
    description: "Organize despesas de maneira eficiente e sem complicações.",
    icon: <Info sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />,
  },
  {
    title: "Gerencie Grupos",
    description: "Ideal para viagens, eventos e moradia compartilhada.",
    icon: <Group sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />,
  },
  {
    title: "Pagamentos Práticos",
    description: "Conecte com Pix, PayPal ou cartões para resolver pagamentos.",
    icon: <Payment sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />,
  },
];

const SaibaMais = () => {
  return (
    <>
      <NavbarGlobal />
      <Box
        sx={{
          px: 3,
          py: 6,
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Cabeçalho Centralizado */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            maxWidth: "800px",
          }}
        >
          Conheça Mais Sobre o Splitify
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#555",
            mb: 6,
            maxWidth: "700px",
          }}
        >
          Sua plataforma ideal para dividir despesas e gerenciar grupos com facilidade. 
          Experimente a maneira mais eficiente de organizar suas finanças compartilhadas.
        </Typography>

        {/* Seção de Benefícios */}
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            maxWidth: "900px",
          }}
        >
          {benefits.map((benefit, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                sx={{
                  p: 4,
                  textAlign: "center",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  bgcolor: "#ffffff",
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                <Stack alignItems="center">
                  {benefit.icon} {/* Ícone personalizado */}
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {benefit.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SaibaMais;
