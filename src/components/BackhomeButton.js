"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const BackhomeButton = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#424242", // Grigio scuro
          color: "white", // Testo bianco
          "&:hover": {
            backgroundColor: "#616161",
          },
        }} // Grigio un po' più chiaro al passaggio del mouse }}
        onClick={() => router.push("/")}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default BackhomeButton;
