import React from "react";
import { Container, Box, Card } from "@mui/material";
import CardService from "./CardService";

const Service = () => {
  return (
    <>
      <Box
        height={400}
        spacing={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          p: 1,
          backgroundColor: "#424242",
          gap: "10px", // Add gap property
        }}
      >
        <CardService tema={"restaurant"} />
        <CardService tema={"tour"} />
        <CardService tema={"history"} />
      </Box>
    </>
  );
};

export default Service;
