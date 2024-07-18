
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
    const navigate = useNavigate();
    const tasks = [
        { id: 1, name: 'Task 1', description: 'Description of Task 1' },
        { id: 2, name: 'Task 2', description: 'Description of Task 2' },
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Task List
            </Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id} button onClick={() => navigate(`/task/${task.id}`)}>
                        <ListItemText primary={task.name} secondary={task.description} />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={() => navigate('/task/new')}>
                Add Task
            </Button>
        </Container>
    );
};

export default TaskList;
