import React from 'react';
import Sidebar from './components/Sidebar/sidebar';
//import Header from './components/DashboardHeader/header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <div className="main">
        {/* <Header/> */}
      </div>
    </div>
  );
}

export default App;
