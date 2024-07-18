import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './pages/Tasklist';
import TaskDetail from './pages/TaskDetail';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/task/:id" element={<TaskDetail />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;