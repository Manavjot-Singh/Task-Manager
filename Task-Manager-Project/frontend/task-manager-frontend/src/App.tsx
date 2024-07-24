import React, { useState } from 'react';
import { Container, Title } from '@mantine/core';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => {
    setRefresh(!refresh); // Toggle the refresh state to trigger a re-fetch
  };

  return (
    <Container size="sm">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route element={<About />} />
        </Routes>
      </BrowserRouter>
      <Title mb="lg">Task Manager</Title>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList refresh={refresh} />
    </Container>
  );
};

export default App;
