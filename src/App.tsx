import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import LeftMenu from "./components/areas/LeftMenu";
import Main from './components/Main';
import RightMenu from './components/RightMenu';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
