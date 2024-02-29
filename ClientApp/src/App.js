import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import { NavMenu } from './components/NavMenu';
import AppRoutes from './AppRoutes';
import './custom.css';
import NavMenu from './components/NavMenu'; // Import NavMenu without curly braces
import Home from './components/Home';

const App = () => (
    <main>
        {/* Render NavMenu outside Routes */}
        <NavMenu />

        <Routes>
            {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
            })}

        </Routes>
    </main>
);

export default App;
