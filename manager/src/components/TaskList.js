import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography, Container } from '@mui/material';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    };
    fetchTasks();
  }, [token]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>Tasks</Typography>
      <List>
        {tasks.map(task => (
          <ListItem key={task._id}>
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
