import './App.css';
import React from 'react'; 
import { ReactDOM } from 'react';
import Entry from "./components/entry"
import Header from "./components/header"
import data from "./data"

function App() {
  const entries = data.map(function(e){
    return(
      <Entry 
        country = {e.id}
        location = {e.location}
        img = {e.img}
        link = {e.link}
        date = {e.date}
        description = {e.description}
      />
    )
  })

  const entrys = data.map(item => {
    return (
        <Entry
          country = {item.id}
          location = {item.location}
          img = {item.img}
          link = {item.link}
          date = {item.date}
          description = {item.description}
        />
    )
})    

  return (
    <div>
      <Header />
      <section className="entries-list">
        {entrys}
      </section>
    </div>
  );  
}

export default App;
