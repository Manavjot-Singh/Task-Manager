import React, { useState } from 'react';
import { Container, Title } from '@mantine/core';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Header/Navbar'; // Corrected import statement

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => {
    setRefresh(!refresh); // Toggle the refresh state to trigger a re-fetch
  };

  return (
    <Container size="sm">
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </Container>
  );
};

export default App;