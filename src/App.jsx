import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Spinner from "./components/Spinner/Spinner";
import JoinUs from "./components/why_join_us/Join_us";

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
      {isLoading ? <Spinner /> : <LandingPage />}
    </div>
  );
}

export default App;
