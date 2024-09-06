import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import RestaurantAdminPage from './Admin/AdminResturent';

 // Corrected path


function App() {
  return (
    <Router>
      <Routes>
     
        {/* Other routes */}
       
        <Route path="/" element={<RestaurantAdminPage />} />
       
   
      </Routes>
    </Router>
  );
}

export default App;

