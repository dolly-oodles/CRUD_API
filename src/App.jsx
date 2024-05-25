import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAPI from './Components/CreateAPI';
import ReadAPI from './Components/ReadAPI';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAPI />} />
        <Route path="/ReadAPI" element={<ReadAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
