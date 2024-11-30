import React from "react";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const navigate = useNavigate();

  const groups = [
    { id: 1, name: "Viagem para a Praia" },
    { id: 2, name: "Divisão de Aluguel" },
  ];

  const handleNewGroup = () => {
    alert("Nova funcionalidade: Criar Grupo!");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meus Grupos
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {groups.map((group) => (
          <Card
            key={group.id}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/groups/${group.id}`)}
          >
            <CardContent>
              <Typography variant="h6">{group.name}</Typography>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="contained"
          size="large"
          onClick={handleNewGroup}
          sx={{ alignSelf: "center" }}
        >
          Criar Novo Grupo
        </Button>
      </Box>
    </Container>
  );
};

export default Groups;
