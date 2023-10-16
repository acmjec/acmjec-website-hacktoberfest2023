import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {

  const [isLoading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [])


  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <LandingPage />
    </div>
  );
}

export default App;
