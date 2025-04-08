import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: grey[500] }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              PRAVDA STORE
            </Link>
          </Typography>
            
          <Link to="/basket" style={{ color: 'inherit', margin: '5px' }}>
            <Button variant="contained">Корзина</Button>
          </Link>
          <Link to="/account" style={{ color: 'inherit', margin: '5px' }}>
            <Button variant="contained">Аккаунт</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}