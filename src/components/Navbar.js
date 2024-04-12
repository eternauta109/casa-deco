// components/Navbar.js

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#424242" }}>
      <Toolbar>
        <Typography variant="h6">{`CASA DECO'`}</Typography>
        {/* Aggiungi qui altri elementi della navbar, come i link */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
