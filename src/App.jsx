import React from 'react';
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  CommunityPage  from "./components/pages/CommunityPage";
import  SignUpPage  from "./components/pages/SignUpPage";
import ProfilePage from "./components/pages/ProfilePage";
import WelcomePage  from "./components/pages/WelcomePage";
import  MerchPage  from "./components/pages/MerchPage";
import './index.css';
// import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./providers/AuthProvider/useAuth";

function App() {
  // const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
          <Route path="/communitypage" element={<CommunityPage />} />
          <Route path="/merchpage" element={<MerchPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;