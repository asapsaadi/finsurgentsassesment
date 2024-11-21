import React from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/DashboardHeader/header';
import './App.css';
import DashboardCards from './components/DashboardCards/cards';
import Overview from './components/Overview/overview';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <DashboardCards/>
        <Overview/>
        <div className="content">
          
        </div>
      </div>
    </div>
  );
}

export default App;
