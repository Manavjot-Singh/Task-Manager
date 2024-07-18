import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import AppRoutes from './routes';
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="App">
            <span className="heading">Taskify</span>

            <inputField />
        </div>
    );
};

export default App;