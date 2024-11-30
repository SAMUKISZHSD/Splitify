import React, { useState } from "react";
import Navbar from "./Navbar";
import { Box, Typography, Button, List, ListItem, ListItemText, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([
    { id: 1, name: "Viagem à Praia" },
    { id: 2, name: "Casa dos Amigos" },
  ]);

  const handleCreateGroup = () => {
    const newGroupName = prompt("Digite o nome do novo grupo:");
    if (newGroupName) {
      setGroups([...groups, { id: groups.length + 1, name: newGroupName }]);
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Meus Grupos
        </Typography>
        <Paper sx={{ p: 2, mb: 3, boxShadow: "0 3px 6px rgba(0,0,0,0.1)" }}>
          <List>
            {groups.map((group) => (
              <ListItem
                key={group.id}
                button
                onClick={() => navigate(`/groups/${group.id}`)}
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                  "&:hover": { bgcolor: "#f0f0f0" },
                }}
              >
                <ListItemText primary={group.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Button variant="contained" size="large" onClick={handleCreateGroup} sx={{ bgcolor: "#1976d2" }}>
          Criar Novo Grupo
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
