import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './Admin/AdminPage';
import AdminRestaurantPage from './Admin/AdminResturent';
 // Corrected path


function App() {
  return (
    <Router>
      <Routes>
     
        {/* Other routes */}
        <Route path="/" element={<AdminPage />} />
        <Route path="/admin/restaurants" element={<AdminRestaurantPage />} />
       
   
      </Routes>
    </Router>
  );
}

export default App;

