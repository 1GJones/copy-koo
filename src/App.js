import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Header';
import SignInPage from './components/SignUpPage';
import CommunityPage from './components/CommunityPage';
import MerchPage from './components/MerchPage';
import './index.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/merch" element={<MerchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
