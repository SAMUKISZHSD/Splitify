import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

const GroupDetails = () => {
  const [expenses, setExpenses] = useState([
    { description: "Mercado", amount: 100 },
    { description: "Gasolina", amount: 50 },
  ]);

  const [newExpense, setNewExpense] = useState({ description: "", amount: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: "", amount: "" });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Detalhes do Grupo
      </Typography>
      <List>
        {expenses.map((expense, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={expense.description}
              secondary={`Valor: R$${expense.amount}`}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
        }}
      >
        <TextField
          label="Descrição"
          variant="outlined"
          name="description"
          value={newExpense.description}
          onChange={handleChange}
        />
        <TextField
          label="Valor"
          variant="outlined"
          type="number"
          name="amount"
          value={newExpense.amount}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleAddExpense}>
          Adicionar Despesa
        </Button>
      </Box>
    </Container>
  );
};

export default GroupDetails;
