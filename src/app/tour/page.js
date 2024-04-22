"use client";

import { Box, Container, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import BackhomeButton from "@/components/BackhomeButton";

const Tour = () => {
  const router = useRouter();
  return (
    <Container>
      <BackhomeButton />
    </Container>
  );
};

export default Tour;
