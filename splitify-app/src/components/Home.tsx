import React from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Stack, 
  Grid, 
  Paper, 
  Divider 
} from "@mui/material";
import { Groups, AttachMoney, HistoryEdu } from "@mui/icons-material"; // Adicionado
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Divisão de Despesas Fácil",
    description: "Registre despesas e veja os saldos automaticamente calculados.",
    icon: <AttachMoney sx={{ fontSize: 50, color: "#1976d2" }} />, // Ícone
  },
  {
    title: "Gerenciamento de Grupos",
    description: "Crie grupos para viagens, eventos ou moradia compartilhada.",
    icon: <Groups sx={{ fontSize: 50, color: "#1976d2" }} />, // Ícone
  },
  {
    title: "Pagamentos Integrados",
    description: "Conecte com Pix, PayPal ou cartões para pagar diretamente.",
    icon: <HistoryEdu sx={{ fontSize: 50, color: "#1976d2" }} />, // Ícone
  },
];

const testimonials = [
  {
    name: "João Silva",
    feedback: "Splitify tornou a divisão de custos na minha viagem muito mais fácil! Recomendo.",
  },
  {
    name: "Maria Oliveira",
    feedback: "Com o Splitify, gerenciar as contas da casa ficou super simples e prático.",
  },
  {
    name: "Carlos Santos",
    feedback: "Ótima ferramenta para dividir despesas com os amigos. Interface intuitiva!",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarHome />
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "90vh",
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
          py: 10,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
          Organize Suas Despesas com Facilidade
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", mb: 4, textAlign: "center" }}>
          Simplifique a divisão de custos com amigos, colegas de casa ou grupos.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/login")}
            sx={{ bgcolor: "#1976d2", color: "#fff", "&:hover": { bgcolor: "#115293" } }}
          >
            Comece Agora
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/saibamais")}
            sx={{
              color: "#1976d2",
              borderColor: "#1976d2",
              "&:hover": { borderColor: "#115293", bgcolor: "rgba(25, 118, 210, 0.1)" },
            }}
          >
            Saiba Mais
          </Button>
        </Stack>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 6, px: 3, bgcolor: "#f5f5f5" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
          Funcionalidades Principais
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: "center",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: 2,
                  bgcolor: "#ffffff",
                }}
              >
                {feature.icon}
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Testimonials Section */}
      <Box sx={{ py: 6, px: 3, bgcolor: "#ffffff" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
          O que nossos usuários dizem
        </Typography>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ textAlign: "center", py: 4 }}>
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", mb: 2, color: "#555", maxWidth: "600px", mx: "auto" }}
              >
                "{testimonial.feedback}"
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                - {testimonial.name}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
