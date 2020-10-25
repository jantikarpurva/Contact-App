import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactApp from "./Components/ContactApp";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary text-white">
            React Example - Contact APP
        </nav>
        <ContactApp/>
        <div className="mb-5"></div>
    </React.Fragment>

  );
}

export default App;
