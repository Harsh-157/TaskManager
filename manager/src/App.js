import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/tasks" element={<>
            <AddTask token={token} />
            <TaskList token={token} />
          </>} />
          <Route path="/" element={<Typography variant="h4">Home</Typography>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
