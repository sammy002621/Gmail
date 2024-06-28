import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Mail from './Mail';
import EmailList from './EmailList';
import Header from './header';
import Sidebar from './sidebar';
import './App.css'
import Starred from './Starred';
import Snooze from './Snooze';
import Draft from './Draft';

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
          <Route path='/starred' element={<Fragment><Starred/></Fragment>}/>
          <Route path='/snooze' element={<Fragment><Snooze/></Fragment>}/>
          <Route path='/draft' element={<Fragment><Draft/></Fragment>}/>
         </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
