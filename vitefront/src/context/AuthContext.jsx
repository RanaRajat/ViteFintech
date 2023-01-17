import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  function login(token) {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  }
  function logout() {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

