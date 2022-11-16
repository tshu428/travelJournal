import './App.css';
import React from 'react'; 
import { ReactDOM } from 'react';
import Entry from "./components/entry"
import Header from "./components/header"
import data from "./data"

function App() {
  const entries = data.map(function(e){
    return(
      <div>
        <Entry 
        country = {e.country}
        location = {e.location}
        img = {e.img}
        link = {e.link}
        date = {e.date}
        description = {e.description}
        />
      <img className="line" src="./assets/line.png"/>
      </div>
      
    )
  })  

  return (
    <div className="main">
      <Header />
      <section className="entries-list">
        {entries}
      </section>
    </div>
  );  
}

export default App;
