import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Mail from './Mail';
import EmailList from './EmailList';
import Header from './header';
import Sidebar from './sidebar';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
         <Routes>
          <Route path='/' element={<Fragment><Mail/></Fragment>}/>
          <Route path='/mail' element={<Fragment><EmailList/></Fragment>}/>
         </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
