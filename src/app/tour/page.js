"use client";

import { Box, Container, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Tour = () => {
  const router = useRouter();
  return (
    <Container>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Tour;
