import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

const ProtectedLayout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ padding: 3 }}>{children}</Box>
    </Box>
  );
};

export default ProtectedLayout;
