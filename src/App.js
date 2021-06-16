import Header from './component/header';
import './App.css';
import { EnterListItem } from './component/enterListItem';
import React from "react";

function App(){
  return(
    <div className="container">
      <Header/>
      <EnterListItem/>
    </div>
  );
}

export default App;
