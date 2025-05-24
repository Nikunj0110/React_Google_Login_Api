import { useState } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
  console.log("Current User:", user);
  return (
    <div>

    {isAuthenticated && <h3>Hello {user.name}</h3>}

      {isAuthenticated ? (
        <button onClick={(e)=>logout()}>Logout</button>
      ) : (
        <button onClick={(e) => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
}

export default App;
