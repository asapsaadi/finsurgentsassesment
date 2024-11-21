import React from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/DashboardHeader/header';
import './App.css';
import DashboardCards from './components/DashboardCards/cards';
import Overview from './components/Overview/overview';
import TransactionHistory from './components/Transaction/transaction';
//import Activity from './components/Activity/activity';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <DashboardCards/>
        <Overview/>
        <TransactionHistory/>
        
        <div className="content"> 
        </div>
      </div>
    </div>
  );
}

export default App;
