import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      {isLoggedIn && <h3> You are  logged in!</h3>}
    </div>
  );
}

export default App;



