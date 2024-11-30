import React, { useState } from "react";
import Navbar from "./Navbar";
import { Box, Typography, Button, List, ListItem, ListItemText, TextField, Paper } from "@mui/material";

const GroupDetails = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Aluguel", amount: 500 },
    { id: 2, description: "Supermercado", amount: 200 },
  ]);
  const [newExpense, setNewExpense] = useState({ description: "", amount: "" });

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, { id: expenses.length + 1, ...newExpense }]);
      setNewExpense({ description: "", amount: "" });
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Detalhes do Grupo
        </Typography>
        <Paper sx={{ p: 2, mb: 3, boxShadow: "0 3px 6px rgba(0,0,0,0.1)" }}>
          <List>
            {expenses.map((expense) => (
              <ListItem key={expense.id} sx={{ borderBottom: "1px solid #e0e0e0" }}>
                <ListItemText
                  primary={expense.description}
                  secondary={`R$ ${expense.amount}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            label="Descrição"
            value={newExpense.description}
            onChange={(e) => setNewExpense((prev) => ({ ...prev, description: e.target.value }))}
          />
          <TextField
            label="Valor"
            type="number"
            value={newExpense.amount}
            onChange={(e) => setNewExpense((prev) => ({ ...prev, amount: e.target.value }))}
          />
          <Button variant="contained" onClick={handleAddExpense}>
            Adicionar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default GroupDetails;
