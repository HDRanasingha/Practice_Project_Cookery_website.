import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './Admin/AdminPage';
 // Corrected path


function App() {
  return (
    <Router>
      <Routes>
     
        {/* Other routes */}
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;

