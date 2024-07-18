
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';

const TaskDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const task = { id: 1, name: 'Task 1', description: 'Description of Task 1' };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Task Detail
            </Typography>
            <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={task.name}
                InputProps={{ readOnly: true }}
            />
            <TextField
                label="Description"
                fullWidth
                margin="normal"
                value={task.description}
                InputProps={{ readOnly: true }}
            />
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Back to List
            </Button>
        </Container>
    );
};

export default TaskDetail;
