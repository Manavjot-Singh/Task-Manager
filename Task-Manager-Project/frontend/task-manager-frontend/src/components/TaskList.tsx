import React, { useEffect, useState } from 'react';
import { Card, List, Text, Checkbox, Group } from '@mantine/core';
import axios from 'axios'; 

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  refresh: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ refresh }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, [refresh]);

  return (
    <Card shadow="sm" padding="lg">
      <Text size="lg" mb="md">Task List</Text>
      <List>
        {tasks.map(task => (
          <List.Item key={task.id}>
            <Group>
              <Text>{task.title}</Text>
              <Checkbox checked={task.completed} />
            </Group>
          </List.Item>
        ))}
      </List>
    </Card>
  );
};

export default TaskList;