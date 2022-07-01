import { useState } from "react";

import "react-toastify/dist/ReactToastify.css"; // import first
import { ToastContainer } from "react-toastify";

import RoutesComponent from "Routes";
import { AuthContext, AuthContextData } from "AuthContextData";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <ToastContainer />
      <RoutesComponent />
    </AuthContext.Provider>
  );
}

export default App;
