

import { createContext, useContext, useState, useReducer } from "react";

export const AuthContext = createContext({ setToken: null });

export const initialStateUser = localStorage.getItem('user') ?
  JSON.parse(localStorage.getItem('user')) : {};

const authReducer = (state, action) => {
  console.log('state', state, 'action:', action)
  switch (action.type) {
    case 'LOGIN':
      const loginState = {
        ...state,
      };
      localStorage.setItem('user', JSON.stringify(loginState));
      return loginState;
    case 'LOGOUT':
      const logoutState = {
        ...state,
      };
      localStorage.clear();
      return logoutState;
    default:
      return {
        ...state,
      };
  }
};


export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateUser);
  // const [token, setToken] = useReducer(null, initialStateUser);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
