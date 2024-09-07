import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminPage from './Admin/AdminPage';
import AdminAddRestaurant from './Admin/AdminAddRestaurent';


function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<AdminPage />} />
        <Route path="/admin/restaurants/add" element={<AdminAddRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;