import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Signup from "./components/SignupPage/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
