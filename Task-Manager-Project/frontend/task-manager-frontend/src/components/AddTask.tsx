import React, { useState } from 'react';
import { TextInput, Button, Card, Group } from '@mantine/core';
import axios from 'axios'; 

interface AddTaskProps {
  onTaskAdded: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('/tasks', { title, completed: false })
      .then(response => {
        console.log('Task added:', response.data);
        setTitle('');
        onTaskAdded(); 
      })
      .catch(error => {
        console.error('There was an error adding the task!', error);
      });
  };

  return (
    <Card shadow="sm" padding="lg">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Task Title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Group mt="md">
          <Button type="submit">Add Task</Button>
        </Group>
      </form>
    </Card>
  );
};

export default AddTask;
