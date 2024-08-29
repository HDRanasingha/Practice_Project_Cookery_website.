import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminRestaurantPage from './Admin/AdminResturent';
import AdminPanelPage from './Admin/AdminPanel';
 // Corrected path


function App() {
  return (
    <Router>
      <Routes>
     
        {/* Other routes */}
        <Route path="/" element={<AdminPanelPage />} />
        <Route path="/admin/restaurants" element={<AdminRestaurantPage />} />
       
   
      </Routes>
    </Router>
  );
}

export default App;

