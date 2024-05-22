import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/tasks">Tasks</Button>
        <Button color="inherit" component={RouterLink} to="/register">Register</Button>
        <Button color="inherit" component={RouterLink} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
