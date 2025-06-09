
import React,{useState} from "react";
import '../styles/App.css';
import LoginForm from"./LoginForm";

const App = () => {
  const [isLoggedIn,setisLoggedIn] = useState(false);
  const handleLogin=()=>{
    setisLoggedIn(true);

  };
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{isLoggedIn? "Welcome, user!": "Please Log In"}</h1>
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
