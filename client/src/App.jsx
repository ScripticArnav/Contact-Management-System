import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AddContact from './pages/AddContact';
import Contacts from './pages/Contacts';
import './style.css';


const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <nav>
        <Link to="/add-contact">Add Contact</Link>
        <Link to="/contacts">View Contacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} /> {/* Redirect to contacts */}
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
