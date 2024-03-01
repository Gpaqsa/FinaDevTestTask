import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import "./Home.css";


const Home = () => {
    return (
        <div className="mainPage">
            <Sidebar />
            <Content />
        </div>
    );
};

export default Home;
